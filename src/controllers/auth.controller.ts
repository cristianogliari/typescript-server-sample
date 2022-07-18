import * as bcrypt from "bcrypt";
import * as express from "express";
import Controller from "../interface/controller.interface";
import UserEmailAlreadyExistsException from "../exceptions/userEmailAlreadyExistsException";
import CreateUserDTO from "../dtos/user.dto";
import User, { userModel } from "../models/user.model";
import LoginDTO from "../dtos/login.dto";
import validationMiddleware from "../middleware/validation.middleware";
import WrongCredentialsException from "../exceptions/wrongCredentialsException";
import envUtils from "../utils/envUtils";
import DataStoredInToken from "../interface/dataStoredInToken.interface";
import * as jwt from "jsonwebtoken";
import TokenData from "../interface/tokenData.interface";

class AuthenticationController implements Controller {
  public path = "/auth";
  public router = express.Router();
  private user = userModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(CreateUserDTO), this.registration)
    this.router.post(`${this.path}/login`, validationMiddleware(LoginDTO), this.login)
    this.router.post(`${this.path}/logout`, this.logout)
  }

  private registration = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const userData: CreateUserDTO = request.body;
    if(await this.user.findOne({ email: userData.email })) {
      next(new UserEmailAlreadyExistsException(userData.email));
    } else {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = await this.user.create({
        ...userData,
        password: hashedPassword,
      });
      user.password = undefined;
      const tokenData = this.createToken(user);
      response.setHeader("Set-Cookie", [this.createCookie(tokenData)]);
      response.send(user);
    }
  }

  private login = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const loginData: LoginDTO = request.body;
    const user = await this.user.findOne({ email: loginData.email });
    if(user) {
      const isPasswordMatching = await bcrypt.compare(loginData.password, user.password);
      if(isPasswordMatching) {
        user.password = undefined;
        const tokenData = this.createToken(user);
        response.setHeader(`Set-Cookie`, [this.createCookie(tokenData)]);
        response.send(user);
      } else {
        next(new WrongCredentialsException());
      }
    } else {
      next(new WrongCredentialsException());
    }
  }

  private createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }

  private createToken(user: User) {
    const expiresIn: number = 60 * 60;
    const secret = envUtils.jwtSecret;
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id,
    };

    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    }
  }

  private logout(request: express.Request, response: express.Response) {
    response.setHeader(`Set-Cookie`, [`Authorization=;Max-age=0`])
    response.sendStatus(200);
  }
}

export default AuthenticationController;
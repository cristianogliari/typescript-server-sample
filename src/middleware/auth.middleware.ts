import { NextFunction, Response } from "express";
import * as jwt from "jsonwebtoken";
import envUtils from "../utils/envUtils";
import DataStoredInToken from "../interface/dataStoredInToken.interface";
import RequestWithUser from "../interface/requestWithUser.interface";
import { userModel } from "../models/user.model";
import WrongCredentialsException from "../exceptions/wrongCredentialsException";
import AuthenticationTokenMissingException from "../exceptions/authenticationTokenMissingException";

const authMiddleware = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const cookies = request.cookies;
  if(cookies && cookies.Authorization) {
    const secret = envUtils.jwtSecret;
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await userModel.findById(id);
      if(user) {
        request.user = user;
        next();
      } else {
        next(new WrongCredentialsException());
      }
    } catch (error) {
      next(new WrongCredentialsException());
    } 
  } else {
    next(new AuthenticationTokenMissingException())
  }
}

export default authMiddleware;
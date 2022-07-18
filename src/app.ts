import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import connectDB from "./configs/database/db.config";
import errorMiddleware from "./middleware/error.middleware";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.connectToDatabase();
    this.initializeeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on the port ${this.port}`);
    })
  }

  private initializeeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router)
    });
  }

  private connectToDatabase() {
    connectDB();
  }  
}

export default App;
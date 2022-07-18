import * as express from "express";
import * as bodyParser from "body-parser";
import connectDB from "./configs/database/db.config";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.connectToDatabase();
    this.initializeeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on the port ${this.port}`);
    })
  }

  private initializeeMiddlewares() {
    this.app.use(bodyParser.json());
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
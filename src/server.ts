import envUtils from "./utils/envUtils";
import App from "./app";
import PostController from "./controllers/posts.controller";
import AuthenticationController from "./controllers/auth.controller";

const port: any = envUtils.serverPort;
const server = new App(
  [ 
    new PostController(),
    new AuthenticationController()
  ], port)

server.listen();
import envUtils from "./utils/envUtils";
import App from "./app";
import PostController from "./controllers/posts.controller";

const port: any = envUtils.serverPort;
const server = new App(
  [ 
    new PostController()
  ], port)

server.listen();
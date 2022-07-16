import App from "./app";
import PostController from "./controllers/posts.controller";

const port: number = 8080;
const server = new App([ new PostController() ], port)

server.listen();
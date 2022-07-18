import * as express from "express";
import PostService from "../services/post.service";

const postService = new PostService();

class PostController {
  public path = "/posts";
  public router = express.Router();

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.post(this.path, this.createAPost);
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.put(`${this.path}/:id`, this.updateById);
    this.router.delete(`${this.path}/:id`, this.deleteById);
  }

  createAPost = (request: express.Request, response: express.Response) => {
    postService.createPost(request, response);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    postService.findAllPosts(request, response);
  }

  getById = (request: express.Request, response: express.Response) => {
    postService.findPostById(request, response);
  }

  updateById = (request: express.Request, response: express.Response) => {
    postService.updatePost(request, response);
  }

  deleteById = (request: express.Request, response: express.Response) => {
    postService.deletePost(request, response);
  }
}

export default PostController
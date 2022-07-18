import * as express from "express";
import Post from "../models/post.model";
import { postModel } from "../models/post.model";
import PostNotFoundException from "../exceptions/postNotFoundException";

class PostService {
  constructor() {
  }

  public createPost(request: express.Request, response: express.Response) {
    const postData: Post = request.body;
    const createdPost = new postModel(postData);
    createdPost.save().then(savedPost => { response.send(savedPost) })
  }

  public findAllPosts(request: express.Request, response: express.Response) {
    postModel.find().then(posts => {
      response.send(posts)
    })
  }

  public findPostById(request: express.Request, response: express.Response, next: express.NextFunction) {
    const id: string = request.params.id;
    
    postModel.findById(id).then((post) => {
      if(post) {
        response.send(post)
      } else {
        next(new PostNotFoundException(id));
      }
    })
  }

  public updatePost(request: express.Request, response: express.Response, next: express.NextFunction) {
    const id: string = request.params.id;
    const postData: Post = request.body;
    postModel.findByIdAndUpdate(id, postData, { new: true })
      .then((post) => {
        if(post) {
          response.send(post)
        } else {
          next(new PostNotFoundException(id))
        }
    })
  }

  public deletePost(request: express.Request, response: express.Response, next: express.NextFunction) {
    const id: string = request.params.id;
    postModel.findByIdAndDelete(id).then(successResponse => {
      if(successResponse) {
        response.sendStatus(200);
      } else {
        next(new PostNotFoundException(id))
      }
    })
  }
}

export default PostService;
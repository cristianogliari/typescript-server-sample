import * as mongoose from "mongoose";
import postSchema from "./schemas/post.schema";

interface Post {
  author: string;
  content: string;
  title: string;
}

export const postModel = mongoose.model<Post & mongoose.Document>("Post", postSchema);


export default Post;
import * as mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  title: String
})

export default postSchema;
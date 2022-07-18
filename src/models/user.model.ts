import * as mongoose from "mongoose";
import userSchema from "./schemas/user.schema";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);
export default User;
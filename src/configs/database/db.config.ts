import * as mongoose from "mongoose";
import envUtils from "../../utils/envUtils";

const {mongoUser, mongoPassword, mongoHost, mongoDatabase, mongoPort} = envUtils;

const connectDB = () => {
  mongoose.connect(`mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`)
}

export default connectDB;
import "dotenv/config";

const envUtils = {
  serverPort: process.env.PORT ?? 9000,
  defaultPath: `${process.env.DEFAULT_PATH}` ?? ``,
  mongoUser: `${process.env.MONGO_USER}`,
  mongoPassword: `${process.env.MONGO_PASSWORD}`,
  mongoHost: `${process.env.MONGO_SERVER}`,
  mongoPort: `${process.env.MONGO_PORT}`,
  mongoDatabase: `${process.env.MONGO_DATABASE}`,
  jwtSecret: `${process.env.JWT_SECRET}` || `Testeeeee`,
};

export default envUtils;
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DEFAULT_PATH: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
      MONGO_SERVER: string;
      MONGO_DATABASE: string;
      MONGO_PORT: string;
    }
  }
}

export {}
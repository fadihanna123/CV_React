declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
      ALLOWEDOMAINS: string;
      USERNAME: string;
      PASSWORD: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

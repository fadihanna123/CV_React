declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
      ALLOWEDOMAINS: string;
      MAIL_USERNAME: string;
      MAIL_PASSWORD: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

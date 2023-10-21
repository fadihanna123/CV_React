import { Request } from 'express';

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

  interface TypedRequest<T> extends Request {
    body: T;
  }

  interface ContactFormData {
    mail: string;
    fullname: string;
    phone: string;
    msg: string;
  }
}

export {};

import type { Request } from 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      DEV_PORT: number;
      PROD_PORT: number;
      ALLOWEDOMAINS: string;
      MAIL_USERNAME: string;
      MAIL_PASSWORD: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production' | 'test';
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

  interface IMailData {
    from: string;
    to: string;
    subject: string;
    html: string;
  }

  type Routes = '/menu' | '/mailit';
}

export {};

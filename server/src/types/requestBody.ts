import { Request } from 'express';

export interface TypedRequest<T> extends Request {
  body: T;
}

export interface ContactFormData {
  mail: string;
  fullname: string;
  phone: string;
  msg: string;
}

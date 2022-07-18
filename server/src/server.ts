import 'dotenv/config';

import routes from 'api/routes';
import { listenFn } from 'controllers';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { allowedDomains, errorHandler, psw, serverPort, uname } from 'utils';

const server = express();

// Settings
export const port = parseInt(serverPort as string, 10) || 5000;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: uname,
    pass: psw,
  },
  tls: { rejectUnauthorized: false },
});

const whiteList = allowedDomains?.split(', ');

const limiter = rateLimit({ windowMs: 3600000, max: 50 });

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList?.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(json({ type: 'application/json', limit: '1kb' }));
server.use(urlencoded({ extended: true }));
server.use(routes);
server.use(errorHandler);

server.listen(port, listenFn);

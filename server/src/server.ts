import 'dotenv/config.js';
import 'tasks';

import routes from 'api/routes';
import { listenFn } from 'controllers';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import ip from 'ip';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { logger } from 'tools';
import {
  allowedDomains,
  errorHandler,
  psw,
  serverPort,
  storeLog,
  uname,
} from 'utils';

const server = express();

// Settings
export const port = serverPort || 5000;

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

const limiter = rateLimit({ windowMs: 3600000, max: 429 });

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList?.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use((req, res, next) => {
  const ipAddress = ip.address();

  logger.info(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  storeLog(
    `Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`,
    req.method,
    req.url
  );

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  next();
});

server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(json({ type: 'application/json', limit: '1kb' }));
server.use(urlencoded({ extended: true }));
server.use(routes);
server.use((_, res) => res.send('This route does not exist!'));
server.use(errorHandler);

server.listen(port, listenFn);

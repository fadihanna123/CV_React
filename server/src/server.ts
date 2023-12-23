import 'tasks';
import routes from 'api/routes';
import { listenFn } from 'controllers';
import { connectDb } from 'db';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import { logger } from 'tools';
import {
  allowedURLs,
  errorHandler,
  psw,
  serverPort,
  storeLog,
  uname,
} from 'utils';
import cors, { CorsOptions } from 'cors';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

dotenv.config();

const server = express();

const whiteList = allowedURLs?.split(', ');

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList?.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

if (!process.env.APIKEY || !process.env.AUTHORIZATION) {
  throw new Error('Missing keys? Add them and restart the app.');
}

// Settings
export const port = serverPort || 5000;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: uname,
    pass: psw,
  },
  tls: { rejectUnauthorized: true },
});

const limiter = rateLimit({ windowMs: 3600000, max: 429 });

server.use((req, res, next) => {
  logger.info(`Method: ${req.method}, URL: ${req.url}`);

  storeLog(`Method: ${req.method}, URL: ${req.url}`, req.method, req.url);

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}`);

  next();
});

connectDb();
server.use(limiter);
server.use(cors(corsOptions));
server.use(helmet());
server.use(json({ type: 'application/json', limit: '1kb' }));
server.use(urlencoded({ extended: true }));
server.use(routes);
server.use((_, res) => res.send('This route does not exist!'));
server.use(errorHandler);

server.listen(port, listenFn);

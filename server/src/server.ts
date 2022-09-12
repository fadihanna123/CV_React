import 'dotenv/config';
import 'tasks';

import routes from 'api/routes';
import { listenFn } from 'controllers';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import helmet from 'helmet';
import https from 'https';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { allowedDomains, crtFile, errorHandler, keyFile, psw, serverPort, uname } from 'utils';

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

const httpsOptions = {
  key: fs.readFileSync(keyFile as string),
  cert: fs.readFileSync(crtFile as string),
};

server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(json({ type: 'application/json', limit: '1kb' }));
server.use(urlencoded({ extended: true }));
server.use(routes);
server.use(errorHandler);

https.createServer(httpsOptions, server).listen(port, listenFn);

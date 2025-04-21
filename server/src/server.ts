import './tasks';
import routes from './api/routes';
import { listenFn } from './controllers';
import { connectDb } from './db';
import dotenv from 'dotenv';
import express, {
  Request,
  Response,
  json,
  urlencoded,
  Application,
} from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import { logger } from './tools';
import {
  allowedURLs,
  apiKey,
  errorHandler,
  psw,
  serverPort,
  storeLog,
  uname,
} from './utils';
import cors, { CorsOptions } from 'cors';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

dotenv.config();

// deepcode ignore UseCsurfForExpress: Csurf package is deprecated.
const server: Application = express();

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

if (!apiKey) {
  throw new Error('Missing keys? Add them and restart the app.');
}

// Settings
export const port = serverPort ?? 5000;

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

// Connect to database.
connectDb();
// Add rate limiter to limit requests.
server.use(limiter);
// Add cors to the server and handle who can access to the server.
server.use(cors(corsOptions));
// Add secuirty middleware and parse JSON data to the server.
server.use(helmet());
server.use(json({ type: 'application/json', limit: '1kb' }));
server.use(urlencoded({ extended: true }));
// Add routes to the server.
server.use('/api/', routes);
// Handle if user get access to unknown route.
server.use((req: Request, res: Response) => {
  res.json({
    error: {
      name: 'Error',
      status: 404,
      message: 'Invalid Request',
      statusCode: 404,
      stack: 'http://localhost:5000/',
    },
  });
});

// Handle server errors.
server.use(errorHandler);

// Start the server.
server.listen(port, listenFn);

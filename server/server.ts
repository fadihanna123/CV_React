import nodemailer from "nodemailer";
import express, { Request, Response, Router } from "express";

import cors from "cors";
import { IMailData } from "./typings";
import routes from "./api/routes";

const server = express();

// Settings

const port: number = parseInt(<string>process.env.PORT) || 5000;

const { USERNAME, PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const whiteList: string[] = ["https://localhost:3000"];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

server.use(cors(corsOptions));
server.use(routes);

server.listen(port, () =>
  console.log(` \n Server listening on port ${port}... \n `)
);

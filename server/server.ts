import express from "express";
import nodemailer from "nodemailer";

import routes from "./api/routes";
import cors from "cors";

const server = express();

// Settings
server.use(cors());

const port: number = parseInt(<string>process.env.PORT) || 5000;

const { USERNAME, PASSWORD, MAILPORT } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
});

server.use(routes);

server.listen(port, () =>
  console.log(` \n Server listening on port ${port}... \n `)
);

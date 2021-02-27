import { Request, Response } from "express";
import nodemailer from "nodemailer";

import { IMailData } from "./typings/List";
import { server } from "./config/GlobalSettings";
import "./config/settings";
import "./api/routes";

const port: number = parseInt(<string>process.env.PORT) || 5000;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "XXX",
    pass: "XX",
  },
});

server.listen(port, () => console.log(`Server listening on port ${port}...`));

export { transporter };

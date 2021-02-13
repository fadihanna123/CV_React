import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { IMailData } from "./typings/List";

const app = express();

// Settings
app.use(express.json());
app.use(cors());

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

app.post("/mailit", (req: Request, res: Response) => {
  const { mail, fullname, phone, msg } = req.body;
  const mailData: IMailData = {
    from: `${fullname} XX@gmail.com`,
    to: "XX@gmail.com",
    subject: `${fullname} vill komma i kontakt med dig`,
    html: `Fullständigt namn: ${fullname}<br />
    E-postadress: ${mail}<br />
    Mobilnummer: ${phone}<br />
    Meddelande: ${msg}<br />`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));

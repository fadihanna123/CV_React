import { Request, Response } from "express";

import { transporter } from "server";
import { logger } from "tools";
import { IMailData } from "typings";
import { apiKey, authorizationKey } from "utils";

export const sendMail = (req: Request, res: Response): void => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    const { mail, fullname, phone, msg } = req.body;

    const mailData: IMailData = {
      from: `${fullname} XX@`,
      to: "XX@",
      subject: `${fullname} vill komma i kontakt med dig`,
      html: `Fullständigt namn: ${fullname}<br />
    E-postadress: ${mail}<br />
    Mobilnummer: ${phone}<br />
    Meddelande: ${msg}<br />`,
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return logger.error((error as Error).message);
      }

      res
        .status(200)
        .send({ message: "Mail sent", message_id: info.messageId });
    });
  } else {
    logger.error("No headers provided on POST /mailit!");

    res.json({ message: "FORBIDDEN" });
  }
};

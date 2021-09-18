import { Request, Response, Router } from "express";

import { transporter } from "../server";
import { IMailData } from "../typings";

const router: Router = Router();

router.post("/mailit", (req: Request, res: Response) => {
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
      return console.log((error as Error).message);
    }

    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

export default router;

import { Request, Response } from 'express';
import { IMailData } from 'models';
import { transporter } from 'server';
import { logger } from 'tools';
import { apiKey, authorizationKey, storeError, storeLog } from 'utils';

/**
 * Send a mail message.
 *
 * @route POST /mailit
 * @param req
 * @param res
 */

export const sendMail = (req: Request, res: Response): void => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const { mail, fullname, phone, msg } = req.body;

    const mailData: IMailData = {
      from: `${fullname} XX@`,
      to: 'XX@',
      subject: `${fullname} vill komma i kontakt med dig`,
      html: `Fullständigt namn: ${fullname}<br />
      E-postadress: ${mail}<br />
      Mobilnummer: ${phone}<br />
      Meddelande: ${msg}<br />`,
    };

    transporter.sendMail(new IMailData(mailData), (error, info) => {
      if (error) {
        storeError((error as Error).message, 'POST', '/mailit');
        return logger.error((error as Error).message);
      }

      storeLog('Mail sent', 'POST', '/mailit');
      res
        .status(200)
        .send({ message: 'Mail sent', message_id: info.messageId });
    });
  } else {
    storeError('No headers provided!', 'POST', '/mailit');
    logger.error('No headers provided on POST /mailit!');

    res.json({ message: 'FORBIDDEN' });
  }
};

import type { Response } from 'express';
import { transporter } from '../server';
import { logger } from '../tools';
import { apiKey, storeError, storeLog } from '../utils';
import Validator from 'validator';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Send a mail message.
 * @route POST /mailit
 * @param req - Request
 * @param res - Response
 * @returns Promise
 */
export const sendMail = async (
  req: TypedRequest<ContactFormData>,
  res: Response
): Promise<void> => {
  if (req.get('apiKey') === apiKey) {
    const { mail, fullname, phone, msg } = req.body;

    if (
      Validator.isEmpty(mail) ||
      Validator.isEmpty(fullname) ||
      Validator.isEmpty(msg)
    ) {
      res.json({
        type: 'error',
        msg: 'Du måste fylla in alla rutor! &#128531;',
      });

      return;
    }

    if (!Validator.isEmail(mail)) {
      res.json({
        type: 'error',
        msg: 'Email är inte korrekt skriven! &#128531;',
      });

      return;
    }

    if (!Validator.isMobilePhone(phone, ['sv-SE'])) {
      res.json({
        type: 'error',
        msg: 'Mobilnummret är inte korrekt skriven!',
      });

      return;
    }

    const mailData: IMailData = {
      from: `${fullname}`,
      to: 'fhanna181@gmail.com',
      subject: `${fullname} vill komma i kontakt med dig`,
      html: `Fullständigt namn: ${fullname}<br />
      E-postadress: ${mail}<br />
      Mobilnummer: ${phone}<br />
      Meddelande: ${msg}<br />`,
    };

    try {
      const mailsent = await transporter.sendMail(mailData);
      if (mailsent) {
        storeLog('Mail sent', 'POST', '/api/mailit');
        res.json({
          type: 'success',
          msg: `Tack för att du kontaktar mig.
                <br />
                Jag har tagit emot ditt meddelande.
                <br />
                Jag kommer att kontakta dig så fort jag kan.
      `,
        });
      } else {
        storeError('Mail not sent', 'POST', '/api/mailit');
        res.json({
          type: 'error',
          msg: `Det finns ett okänt fel. <br /> Var vänlig och testa igen senare.
      `,
        });
      }
    } catch (error) {
      storeError((error as Error).message, 'POST', '/api/mailit');
      logger.error((error as Error).message);
      res.json({
        type: 'error',
        msg: 'Det finns ett okänt fel. <br /> Var vänlig och testa igen senare.',
      });
    }
  } else {
    storeError('No headers provided!', 'POST', '/api/mailit');
    logger.error('No headers provided on POST /api/mailit!');

    res.json({ message: 'FORBIDDEN' });
  }
};

import type { Response } from 'express';
import { transporter } from '../server';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError, storeLog } from '../utils';
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
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
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
      await transporter.sendMail(mailData);
      storeLog('Mail sent', 'POST', '/mailit');
      res.json({
        type: 'success',
        msg: `Tack för att du kontaktar mig.
                <br />
                Jag har tagit emot ditt meddelande.
                <br />
                Jag kommer att kontakta dig så fort jag kan.
      `,
      });
    } catch (error) {
      storeError((error as Error).message, 'POST', '/mailit');
      logger.error((error as Error).message);
      res.json({
        type: 'error',
        msg: 'Det finns ett okänt fel. <br /> Var vänlig och testa igen senare.',
      });
    }
  } else {
    storeError('No headers provided!', 'POST', '/mailit');
    logger.error('No headers provided on POST /mailit!');

    res.json({ message: 'FORBIDDEN' });
  }
};
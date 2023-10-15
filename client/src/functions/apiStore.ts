import { request } from 'api';
import { menu_api, sendMail_api } from 'utils';
import { errorHandler } from './helper';

/**
 * Send a mail message.
 *
 * @param contactForm
 * @returns Promise.
 */
export const sendMail = async (contactForm: ContactFormTypes) => {
  try {
    return await request.post<MailData>(sendMail_api as Paths, contactForm);
  } catch (error) {
    errorHandler(error);
  }
};

/**
 * Get all menu items.
 *
 * @returns Menu array of objects.
 */

export const getMenu = async () => {
  try {
    return await request.get<Menu[]>(menu_api as Paths);
  } catch (error) {
    errorHandler(error);
  }
};

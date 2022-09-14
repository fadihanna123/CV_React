import { request } from 'api';
import { ContactFormTypes, MailData, Menu } from 'models';
import { menu_api, sendMail_api } from 'utils/envs';

/**
 * Send a mail message.
 *
 * @param contactForm
 * @returns Promise.
 */

export const sendMail = async (contactForm: ContactFormTypes) =>
  await request.post<MailData>(sendMail_api as string, contactForm);

/**
 * Get all menu items.
 *
 * @returns Menu array of objects.
 */

export const getMenu = async (): Promise<any> => {
  return await request.get<Menu[]>(menu_api as string);
};

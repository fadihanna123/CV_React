import { request } from 'api';
import { ContactFormTypes, MailData, Menu } from 'models';
import { menu_api, sendMail_api } from 'utils';

/**
 * Send a mail message.
 *
 * @param contactForm
 * @returns Promise.
 */

export const sendMail = async (contactForm: ContactFormTypes) =>
  await request.post<MailData>(sendMail_api, contactForm);

/**
 * Get all menu items.
 *
 * @returns Menu array of objects.
 */

export const getMenu = async (): Promise<any> =>
  await request.get<Menu[]>(menu_api);

import { request } from '@api/index';
import { menu_api, sendMail_api } from '@utils/index';
import { errorHandler } from './helper';

/**
 * Send a mail message.
 * @function sendMail
 * @async
 * @param contactForm
 * @returns Promise.
 * @example sendMail( { fullname: "Erik"; mail: "erik@gmail.com"; phone: "07547XXX"; msg: "HELLO"; })
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
 * @function getMenu()
 * @async
 * @returns { Promise<Menu[] | undefined> } Menu array of objects.
 * @example getMenu();
 */
export const getMenu = async (): Promise<Menu[] | undefined> => {
  try {
    const { data } = await request.get<Menu[]>(menu_api as Paths);
    console.log('🔗 Menu: ', data);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

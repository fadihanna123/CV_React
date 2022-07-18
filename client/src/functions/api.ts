import { request } from 'api';
import { ContactFormTypes, MailData, Menu } from 'models';
import { menu_api, sendMail_api } from 'utils/envs';

export const sendMail = async (contactForm: ContactFormTypes) =>
  await request.post<MailData>(sendMail_api as string, contactForm);

export const getMenu = async (): Promise<any> => {
  return await request.get<Menu[]>(menu_api as string);
};

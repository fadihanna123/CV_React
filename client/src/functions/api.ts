import { request } from 'api';
import { AxiosResponse } from 'axios';
import { ContactFormTypes } from 'models';
import { sendMail_api } from 'utils/envs';

export const sendMail = async (
  contactForm: ContactFormTypes
): Promise<AxiosResponse<unknown, any>> => {
  return await request.post(sendMail_api as string, contactForm);
};

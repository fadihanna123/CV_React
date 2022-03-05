import { request } from "api";
import { ContactFormTypes } from "models";
import { sendMail_api } from "utils/envs";

export const sendMail = async (contactForm: ContactFormTypes) =>
  await request.post(sendMail_api as string, contactForm);

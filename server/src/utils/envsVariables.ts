const {
  PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  ALLOWEDOMAINS,
  APIKEY,
  AUTHORIZATION,
} = process.env;

export const serverPort = PORT;

export const uname = MAIL_USERNAME;

export const psw = MAIL_PASSWORD;

export const allowedDomains = ALLOWEDOMAINS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

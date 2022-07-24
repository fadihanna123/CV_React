const {
  PORT,
  SSL_CRT_FILE,
  SSL_KEY_FILE,
  USERNAME,
  PASSWORD,
  ALLOWEDOMAINS,
  APIKEY,
  AUTHORIZATION,
} = process.env;

export const serverPort = PORT;

export const uname = USERNAME;

export const psw = PASSWORD;

export const allowedDomains = ALLOWEDOMAINS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

export const crtFile: string | undefined = SSL_CRT_FILE;

export const keyFile: string | undefined = SSL_KEY_FILE;

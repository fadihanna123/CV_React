const {
    NODE_ENV,
    DEV_PORT,
    PROD_PORT,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    ALLOWEDOMAINS,
    APIKEY,
} = process.env;

const requiredEnvVars = ['DEV_PORT', 'ALLOWEDOMAINS', 'APIKEY'];

requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
});

export const serverPort = NODE_ENV === 'development' ? DEV_PORT : PROD_PORT;

export const uname = MAIL_USERNAME;

export const psw = MAIL_PASSWORD;

export const allowedDomains = ALLOWEDOMAINS;

export const apiKey = APIKEY;

export const allowedURLs = ALLOWEDOMAINS;

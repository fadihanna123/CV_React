const {
  VITE_PUBLIC_BACKEND_URL,
  VITE_PUBLIC_MENU,
  VITE_PUBLIC_SEND_MAIL,
  VITE_PUBLIC_GITHUB_URL,
  VITE_PUBLIC_API_KEY,
  NODE_ENV,
} = import.meta.env;

const requiredEnvVars = [
  'VITE_PUBLIC_BACKEND_URL',
  'VITE_PUBLIC_MENU',
  'VITE_PUBLIC_API_KEY',
];

requiredEnvVars.forEach((varName) => {
  if (!import.meta.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

export const backendURL = VITE_PUBLIC_BACKEND_URL;

export const mode = NODE_ENV;

export const apiKey = VITE_PUBLIC_API_KEY;

export const sendMail_api = VITE_PUBLIC_SEND_MAIL;

export const menu_api = VITE_PUBLIC_MENU;

export const githubURL = VITE_PUBLIC_GITHUB_URL;

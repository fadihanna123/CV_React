const {
  NEXT_PUBLIC_BACKEND_URL,
  NEXT_PUBLIC_MENU,
  NEXT_PUBLIC_SEND_MAIL,
  NEXT_PUBLIC_LINKEDIN_URL,
  NEXT_PUBLIC_GITHUB_URL,
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_AUTHORIZATION,
} = process.env;

export const backendURL = NEXT_PUBLIC_BACKEND_URL;

export const apiKey = NEXT_PUBLIC_API_KEY;

export const authorizationKey = NEXT_PUBLIC_AUTHORIZATION;

export const sendMail_api = NEXT_PUBLIC_SEND_MAIL;

export const menu_api = NEXT_PUBLIC_MENU;

export const linkedinurl = NEXT_PUBLIC_LINKEDIN_URL;

export const githubURL = NEXT_PUBLIC_GITHUB_URL;

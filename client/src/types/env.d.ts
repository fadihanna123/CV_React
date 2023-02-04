declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_LINKEDIN_URL: string;
      REACT_APP_GITHUB_URL: string;
      REACT_APP_SEND_MAIL: string;
      REACT_APP_MENU: string;
      REACT_APP_API_KEY: string;
      REACT_APP_AUTHORIZATION: string;
      SKIP_PREFLIGHT_CHECK: boolean;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

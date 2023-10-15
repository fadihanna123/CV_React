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

  type Paths = 'mailit' | 'menu';

  type ContentTypeHeaders =
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'application/json'
    | 'text/plain';

  interface AlertProps {
    readonly error?: boolean;
    readonly success?: boolean;
  }

  interface ContactFormTypes {
    fullname: string;
    mail: string;
    phone: string;
    msg: string;
  }

  interface MailData {
    fullname: string;
    mail: string;
    phone: string;
    msg: string;
  }

  interface Menu {
    id: number;
    title: string;
    path: string;
    classname: string;
    pathroute: string;
  }

  interface MainFooterProps {
    children: JSX.Element;
  }

  interface MainHeaderProps {
    children: JSX.Element;
  }

  interface MenuProps {
    children: React.ReactNode;
  }
}

export {};

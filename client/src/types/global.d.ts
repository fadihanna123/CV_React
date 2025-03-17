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
    readonly $error?: boolean;
    readonly $success?: boolean;
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
    icon: string;
  }

  interface MailResponse {
    type: string;
    msg: string;
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

  interface ProjectList {
    id: number;
    title: string;
    image: {
      path: string;
      alt: string;
    };
    links: {
      githubURL: string;
      URL: string;
    };
  }

  interface StudioList {
    id: number;
    title: string;
    schoolName: string;
    city?: string;
    start: {
      month: string;
      year: number;
    };
    end: { month: string; year: number };
  }

  interface WorkList {
    id: number;
    title: string;
    workPlace: string;
    city?: string;
    start: {
      month: string;
      year: number;
    };
    end: { month: string; year: number };
  }
}

export {};

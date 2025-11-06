declare global {
  declare module '*.jpg';
  declare module '*.png';
  declare module '*.PNG';

  interface ImportMetaEnv {
    VITE_PUBLIC_BACKEND_URL: string;
    VITE_PUBLIC_LINKEDIN_URL: string;
    VITE_PUBLIC_GITHUB_URL: string;
    VITE_PUBLIC_SEND_MAIL: string;
    VITE_PUBLIC_MENU: string;
    VITE_PUBLIC_API_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
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
    type: string;
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

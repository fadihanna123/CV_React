import { toast } from 'react-toastify';

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const errorHandler = (error: any) => {
  if (error.response) {
    toast.error(error.response.data);
    toast.error(error.response.status);
    toast.error(error.response.headers);
  } else if (error.request) {
    toast.error(error.request);
  } else {
    toast.error('Error', error.message);
  }

  toast.error(error.config);
  throw new Error((error as Error).message);
};

export { errorHandler, capitalizeFirstLetter };

import { ContactFormTypes } from 'models';
import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLoading } from 'redux/actions';

import { sendMail } from './api';

export const contactMe = async (
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>,
): Promise<void> => {
  dispatch(setLoading(true));

  sendMail(contactForm)
    .catch((err) =>
      toast.error((err as Error).message, { transition: Flip }),
    )
    .finally(() => dispatch(setLoading(false)));
};

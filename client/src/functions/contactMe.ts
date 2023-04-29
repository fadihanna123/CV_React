import { ContactFormTypes } from 'models';

import { Dispatch } from 'redux';
import {
  setContactFormAlert,
  setContactFormErr,
  setLoading,
} from 'redux/reducers';
import { sendMail } from './api';
import { toast } from 'react-toastify';

/**
 * Contact functionality.
 *
 * @param contactForm
 * @param dispatch
 */
export const contactMe = async (
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>
) => {
  dispatch(setLoading(true));

  try {
    const { data } = await sendMail(contactForm);
    dispatch(setContactFormAlert(true));

    if ((data as any).type === 'error') {
      dispatch(setContactFormErr((data as any).msg));
    } else {
      dispatch(setContactFormErr(''));
    }
  } catch (err) {
    toast.error((err as Error).message);
  }

  dispatch(setLoading(false));
};

import {
  setContactFormAlert,
  setContactFormErr,
  setLoading,
} from '../redux/reducers';
import { sendMail } from './apiStore';
import { toast } from 'react-toastify';

/**
 * Contact functionality.
 *
 * @param { ContactFormTypes } contactForm
 * @param { any } dispatch
 */
export const contactMe = async (
  contactForm: ContactFormTypes,
  dispatch: any
) => {
  dispatch(setLoading(true));

  try {
    const data = await sendMail(contactForm);
    dispatch(setContactFormAlert(true));

    if ((data as any).type === 'error') {
      dispatch(setContactFormErr((data as any).msg));
    } else {
      dispatch(setContactFormErr(''));
    }
  } catch (err) {
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};

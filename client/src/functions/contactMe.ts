import { toast } from 'react-toastify';

// Components
import {
  setContactFormAlert,
  setContactFormErr,
  setLoading,
} from '@redux/reducers';
import { sendMail } from './apiStore';
import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

/**
 * Contact functionality.
 *
 * @param { ContactFormTypes } contactForm
 * @param { any } dispatch
 */
export const contactMe = async (
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>
): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const data: AxiosResponse<MailData, any> | undefined =
      await sendMail(contactForm);

    if ((data as any).data.type === 'error') {
      dispatch(setContactFormAlert(true));
      dispatch(setContactFormErr((data as any).data.msg));
    } else {
      dispatch(setContactFormAlert(true));
      dispatch(setContactFormErr(''));
    }
  } catch (err) {
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};

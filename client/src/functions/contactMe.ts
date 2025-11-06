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
    const data: AxiosResponse<MailResponse> | undefined =
      await sendMail(contactForm);

    if (data!.data.type === 'error') {
      dispatch(setContactFormAlert(true));
      dispatch(setContactFormErr(data!.data.msg));
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

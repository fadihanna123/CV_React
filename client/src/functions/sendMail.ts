import { request } from 'api';
import { ContactFormTypes } from 'models';
import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLoading } from 'redux/actions';
import { sendMail_api } from 'utils/envs';

export const sendMail = async (
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    const endPoint = sendMail_api;

    dispatch(setLoading(true));

    await request.post(endPoint as string, contactForm);
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};

import { ContactFormTypes } from 'models';
import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLoading } from 'redux/reducers';

import { sendMail } from './api';

/**
 * Contact functionality.
 *
 * @param contactForm
 * @param dispatch
 */

export const contactMe = (
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>
): void => {
  dispatch(setLoading(true));

  sendMail(contactForm)
    .catch((err) => toast.error((err as Error).message, { transition: Flip }))
    .finally(() => dispatch(setLoading(false)));
};

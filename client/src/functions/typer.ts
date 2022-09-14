import { ContactFormTypes } from 'models';
import { Dispatch } from 'redux';
import { setContactForm } from 'redux/actions';

/**
 * Handle contact form values.
 *
 * @param e
 * @param contactForm
 * @param dispatch
 * @returns Object.
 */

export const typer = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  contactForm: ContactFormTypes,
  dispatch: Dispatch<any>
) =>
  dispatch(
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  );

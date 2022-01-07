import { Dispatch } from 'redux';
import { setContactForm } from 'redux/actions';
import { ContactFormTypes } from 'typings';

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

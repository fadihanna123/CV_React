import { ContactFormTypes } from 'models';
import { setContactForm } from 'redux/reducers';
import React from 'react';

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
  dispatch: any
) =>
  dispatch(
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  );

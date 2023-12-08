import { setContactForm } from 'redux/reducers';
import React from 'react';
import { capitalizeFirstLetter } from './helper';

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
  dispatch: any,
  isCapitalized?: boolean
) =>
  dispatch(
    setContactForm({
      ...contactForm,
      [e.target.name]: isCapitalized
        ? capitalizeFirstLetter(e.target.value)
        : e.target.value,
    })
  );

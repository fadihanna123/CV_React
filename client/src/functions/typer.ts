import { ContactFormTypes } from "typings";

const typer = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  contactForm: ContactFormTypes,
  setContactForm: (contactForm: ContactFormTypes) => void
) =>
  setContactForm({
    ...contactForm,
    [e.target.name]: e.target.value,
  });

export { typer };

import ContactForm from 'containers/ContactForm';
import { useAppSelector } from '../redux/app';
import { getContactFormAlert, getContactFormErr } from '../redux/reducers';
import { Alert, ContactContent, ContactHeading, ContactText } from 'styles';
import React from 'react';
import HTMLReactParser from 'html-react-parser';

const Contact: React.FC = () => {
  const contactFormErr = useAppSelector(getContactFormErr);
  const contactFormAlert = useAppSelector(getContactFormAlert);

  return (
    <>
      <ContactContent>
        <ContactHeading>Kontakt</ContactHeading>
        <ContactText>Jag är glad att du vill kontakta mig</ContactText>
      </ContactContent>
      {contactFormAlert ? (
        contactFormErr ? (
          <Alert error>{HTMLReactParser(contactFormErr)}</Alert>
        ) : (
          <Alert success>
            Tack för meddelandet.
            <br />
            Vi hörs snart! &#128512;
          </Alert>
        )
      ) : (
        ''
      )}
      <ContactForm />
    </>
  );
};

export default Contact;

import ContactForm from 'containers/ContactForm';
import { useAppSelector } from 'redux/app';
import { getLoading } from 'redux/reducers';
import { Alert, ContactContent, ContactHeading, ContactText } from 'styles';
import React from 'react';

const Contact: React.FC = () => {
  const loading = useAppSelector(getLoading);

  return (
    <>
      <ContactContent>
        <ContactHeading>Kontakt</ContactHeading>
        <ContactText>Jag är glad att du vill kontakta mig</ContactText>
      </ContactContent>
      <ContactForm />
      {loading && (
        <Alert>
          Tack för att du kontaktar mig.
          <br />
          Jag har tagit emot ditt meddelande.
          <br />
          Jag kommer att kontakta dig så fort jag kan.
        </Alert>
      )}
    </>
  );
};

export default Contact;

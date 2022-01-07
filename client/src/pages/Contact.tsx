import ContactForm from 'containers/ContactForm';
import { useSelector } from 'react-redux';
import { Alert, ContactContent, ContactHeading, ContactText } from 'styles';
import { LoadingReducerTypes } from 'typings';

const Contact: React.FC = () => {
  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );

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

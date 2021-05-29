import ContactForm from "components/ContactForm";
import Coding from "Images/coding.jpg";
import { useRecoilState } from "recoil";
import { loadingState } from "States";
import styled from "styled-components";

const Contact = () => {
  const [loading] = useRecoilState(loadingState);

  return (
    <>
      <ContactContent>
        <ContactHeading>Kontakt</ContactHeading>
        <ContactText>Jag är glad att du vill kontakta mig</ContactText>
      </ContactContent>
      <ContactForm />
      {loading ? (
        <Alert>
          Tack för att du kontaktar mig.
          <br />
          Jag har tagit emot ditt meddelande.
          <br />
          Jag kommer att kontakta dig så fort jag kan.
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;

const Alert = styled.div`
  text-align: center;
  color: #5cb85c;
  background: #292b2c;
  margin: 10px;
  padding: 10px;
`;

const ContactText = styled.p`
  text-align: center;
  font-style: italic;
  color: white;
  padding-top: 60px;
  padding-right: 300px;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 1px;
  }
`;

const ContactContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: white;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;
  margin-bottom: 100px;

  @media (max-width: 1800px) {
    background-size: cover;
    height: 220px;
  }
`;

const ContactHeading = styled.h1`
  font-style: italic;
  color: white;
  font-size: 52px;
  padding-top: 130px;
  height: 0;
  padding-right: 280px;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 0;
    height: 100px;
    padding: 20px;
  }
`;

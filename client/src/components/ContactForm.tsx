import { useRecoilState } from "recoil";
import { contactFormState, loadingState } from "States";
import axios from "axios";
import { MailData } from "typings";
import styled from "styled-components";

const ContactForm = () => {
  const [contactForm, setContactForm] = useRecoilState(contactFormState);
  const [, setLoading] = useRecoilState(loadingState);

  const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });

  const SendMail = async (): Promise<void> => {
    try {
      setLoading(true);

      await axios.post<MailData>("mailit", contactForm);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactBlock>
        <Row>
          <Col10>
            <FormLabel htmlFor="fullname">Fullständigt namn:</FormLabel>
          </Col10>
          <Col25>
            <Input
              id="fullname"
              name="fullname"
              value={contactForm.fullname}
              onChange={typer}
            />
          </Col25>
        </Row>

        <Row>
          <Col10>
            <FormLabel htmlFor="mail">E-postadress:</FormLabel>
          </Col10>
          <Col25>
            <Input
              id="mail"
              name="mail"
              value={contactForm.mail}
              onChange={typer}
            />
          </Col25>
        </Row>

        <Row>
          <Col10>
            <FormLabel htmlFor="phone">Mobilnummer:</FormLabel>
          </Col10>
          <Col25>
            <Input
              id="phone"
              name="phone"
              value={contactForm.phone}
              onChange={typer}
            />
          </Col25>
        </Row>

        <Row>
          <Col10>
            <FormLabel htmlFor="msg">Meddelande:</FormLabel>
          </Col10>
          <Col25>
            <MyTxtarea
              id="msg"
              name="msg"
              cols={50}
              rows={10}
              value={contactForm.msg}
              onChange={typer}
            ></MyTxtarea>
          </Col25>
        </Row>
        <SendBtn type="submit" onClick={SendMail}>
          Skicka
        </SendBtn>
      </ContactBlock>
    </>
  );
};

export default ContactForm;

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const SendBtn = styled.button`
  margin: 10px;
  padding: 15px;
  background: black;
  color: white;
  display: flex;
  margin: 0 auto;
  border-radius: 15px;
  font-size: 17px;

  &:hover {
    background: black;
    color: white;
  }
`;

const ContactBlock = styled.div`
  text-align: center;
  font-style: italic;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
  }
`;

const MyTxtarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin: 10px;
  font-weight: bold;
  font-size: 19px;

  @media (max-width: 1800px) {
    text-align: center;
  }
`;

const Col10 = styled.div`
  width: 10%;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;

const Col25 = styled.div`
  width: 25%;

  @media (max-width: 1800px) {
    width: 90%;
  }
`;

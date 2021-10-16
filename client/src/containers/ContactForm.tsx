import { sendMail, typer } from "functions";
import { Flip, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { contactFormState, loadingState } from "states";
import {
  Col10,
  Col25,
  ContactBlock,
  FormLabel,
  Input,
  MyTxtarea,
  Row,
  SendBtn,
} from "styles";
import { ContactFormTypes } from "typings";

const ContactForm: React.FC = () => {
  const [contactForm, setContactForm] =
    useRecoilState<ContactFormTypes>(contactFormState);
  const [, setLoading] = useRecoilState(loadingState);

  return (
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
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, setContactForm)}
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
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, setContactForm)}
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
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, setContactForm)}
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
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, setContactForm)}
          ></MyTxtarea>
        </Col25>
      </Row>
      <SendBtn type="submit" onClick={() => sendMail(setLoading, contactForm)}>
        Skicka
      </SendBtn>
      <ToastContainer transition={Flip} />
    </ContactBlock>
  );
};

export default ContactForm;

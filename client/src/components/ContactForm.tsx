import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { contactFormState, loadingState } from "States";
import { MailData } from "typings";

import {
  Col10,
  Col25,
  ContactBlock,
  FormLabel,
  Input,
  MyTxtarea,
  Row,
  SendBtn,
} from "../styles/ContactStyles";

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
      toast((err as Error).message, { transition: Flip, type: "error" });
    } finally {
      setLoading(false);
    }
  };

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
      <ToastContainer transition={Flip} />
    </ContactBlock>
  );
};

export default ContactForm;

import axios from "axios";
import Coding from "Images/coding.jpg";
import React, { useState } from "react";
import styled from "styled-components";
import { ContactForm, MailData } from "typings";

const Contact = () => {
  const [contactform, setContactform] = useState<ContactForm>({
    fullname: "",
    mail: "",
    phone: "",
    msg: "",
  });

  const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContactform({ ...contactform, [e.target.name]: e.target.value });

  const [loading, setLoading] = useState<boolean>(false);

  const SendMail = async (): Promise<void> => {
    try {
      setLoading(true);

      await axios.post<MailData>("mailit", contactform);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactContent>
        <ContactHeading>Kontakt</ContactHeading>
        <ContactText>Jag är glad att du vill kontakta mig</ContactText>
      </ContactContent>
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
      <ContactBlock>
        <Row>
          <Col10>
            <FormLabel htmlFor="fullname">Fullständigt namn:</FormLabel>
          </Col10>
          <Col25>
            <Input
              id="fullname"
              name="fullname"
              value={contactform.fullname}
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
              value={contactform.mail}
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
              value={contactform.phone}
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
              value={contactform.msg}
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

export default Contact;

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Alert = styled.div`
  text-align: center;
  color: #5cb85c;
  background: #292b2c;
  margin: 10px;
  padding: 10px;
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

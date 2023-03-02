import { contactMe, typer } from 'functions';
import { Flip, ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getContactForm } from 'redux/reducers';
import {
  Col10,
  Col25,
  ContactBlock,
  FormLabel,
  Input,
  MyTxtarea,
  Row,
  SendBtn,
} from 'styles';
import React from 'react';

const ContactForm: React.FC = () => {
  const contactForm = useAppSelector(getContactForm);

  const dispatch = useAppDispatch();

  return (
    <ContactBlock>
      <Row>
        <Col10>
          <FormLabel htmlFor='fullname'>Fullständigt namn:</FormLabel>
        </Col10>
        <Col25>
          <Input
            id='fullname'
            name='fullname'
            value={contactForm.fullname}
            placeholder='e.g Erik Eriksson'
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, dispatch)}
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='mail'>E-postadress:</FormLabel>
        </Col10>
        <Col25>
          <Input
            id='mail'
            name='mail'
            value={contactForm.mail}
            placeholder={'e.g name@gmail.com'}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, dispatch)}
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='phone'>Mobilnummer:</FormLabel>
        </Col10>
        <Col25>
          <Input
            id='phone'
            name='phone'
            value={contactForm.phone}
            placeholder={'e.g 073739944'}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, dispatch)}
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='msg'>Meddelande:</FormLabel>
        </Col10>
        <Col25>
          <MyTxtarea
            id='msg'
            name='msg'
            cols={50}
            rows={10}
            value={contactForm.msg}
            placeholder={'e.g Tja! 😋'}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => typer(e, contactForm, dispatch)}
          ></MyTxtarea>
        </Col25>
      </Row>
      <SendBtn type='submit' onClick={() => contactMe(contactForm, dispatch)}>
        Skicka
      </SendBtn>
      <ToastContainer transition={Flip} />
    </ContactBlock>
  );
};

export default ContactForm;

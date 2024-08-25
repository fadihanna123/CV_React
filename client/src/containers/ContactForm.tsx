import { contactMe, typer } from 'functions';
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
import { Flip, ToastContainer } from 'react-toastify';
import useReduxConsts from 'hooks/useReduxConsts';

const ContactForm: React.FC = () => {
  const { contactForm, dispatch } = useReduxConsts();

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
            style={{ textTransform: 'capitalize' }}
            placeholder='e.g Erik Eriksson'
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              typer(e, contactForm, dispatch);
            }}
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
            placeholder={'e.g 073-73 99 44'}
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
            ) => typer(e, contactForm, dispatch, true)}
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

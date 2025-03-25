import { FC } from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

// Components
import { contactMe } from '@functions/index';
import {
  Col10,
  Col25,
  ContactBlock,
  FormLabel,
  Input,
  MyTxtarea,
  Row,
  SendBtn,
} from '@styles/index';
import useReduxConsts from '@hooks/useReduxConsts';

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<ContactFormTypes>();
  const { dispatch } = useReduxConsts();

  return (
    <ContactBlock
      onSubmit={handleSubmit((contactForm: ContactFormTypes) => {
        contactMe(contactForm, dispatch);
      })}
    >
      <Row>
        <Col10>
          <FormLabel htmlFor='contact_fullname'>Fullständigt namn:</FormLabel>
        </Col10>
        <Col25>
          <Input
            {...register('fullname')}
            id='contact_fullname'
            name='fullname'
            style={{ textTransform: 'capitalize' }}
            placeholder='e.g Erik Eriksson'
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='contact_email'>E-postadress:</FormLabel>
        </Col10>
        <Col25>
          <Input
            {...register('mail')}
            id='contact_email'
            name='mail'
            placeholder={'e.g name@gmail.com'}
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='contact_phone'>Mobilnummer:</FormLabel>
        </Col10>
        <Col25>
          <Input
            {...register('phone')}
            id='contact_phone'
            name='phone'
            placeholder={'e.g 073-73 99 44'}
          />
        </Col25>
      </Row>
      <Row>
        <Col10>
          <FormLabel htmlFor='contact_msg'>Meddelande:</FormLabel>
        </Col10>
        <Col25>
          <MyTxtarea
            {...register('msg')}
            id='contact_msg'
            name='msg'
            cols={50}
            rows={10}
            placeholder={'e.g Tja! 😋'}
          ></MyTxtarea>
        </Col25>
      </Row>
      <SendBtn type='submit'>Skicka</SendBtn>
      <ToastContainer transition={Flip} />
    </ContactBlock>
  );
};

export default ContactForm;

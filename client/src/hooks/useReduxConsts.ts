import {
  getContactForm,
  getContactFormAlert,
  getContactFormErr,
  getMenuState,
} from '@redux/reducers';
import { useAppDispatch, useAppSelector } from '@redux/app';

const useReduxConsts = () => {
  const contactForm = useAppSelector(getContactForm);
  const contactFormErr = useAppSelector(getContactFormErr);
  const contactFormAlert = useAppSelector(getContactFormAlert);
  const menu = useAppSelector(getMenuState);

  const dispatch = useAppDispatch();

  return { contactForm, menu, contactFormErr, contactFormAlert, dispatch };
};

export default useReduxConsts;

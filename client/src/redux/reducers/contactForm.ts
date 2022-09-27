import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactFormTypes } from 'models';
import { RootState } from 'redux/store';

const initialState: ContactFormTypes = {
  fullname: '',
  mail: '',
  phone: '',
  msg: '',
};

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setContactForm: (state, action: PayloadAction<ContactFormTypes>) => {
      return (state = action.payload);
    },
  },
});

export const { setContactForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
export const getContactForm = (state: RootState) => state.contactForm;

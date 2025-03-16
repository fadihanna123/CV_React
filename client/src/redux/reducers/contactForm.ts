import { createSlice } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

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
    setContactForm: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setContactForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
export const getContactForm = (state: RootState) => state.contactForm;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

const initialState = false;

export const contactFormAlertSlice = createSlice({
  name: 'contactFormAlert',
  initialState,
  reducers: {
    setContactFormAlert: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setContactFormAlert } = contactFormAlertSlice.actions;

export default contactFormAlertSlice.reducer;
export const getContactFormAlert = (state: RootState) => state.contactFormAlert;

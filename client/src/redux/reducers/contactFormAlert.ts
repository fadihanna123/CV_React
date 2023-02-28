import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

const initialState: boolean = false;

export const contactFormAlertSlice = createSlice({
  name: 'contactFormAlert',
  initialState,
  reducers: {
    setContactFormAlert: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { setContactFormAlert } = contactFormAlertSlice.actions;

export default contactFormAlertSlice.reducer;
export const getContactFormAlert = (state: RootState) => state.contactFormAlert;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

const initialState = '';

export const contactFormErrSlice = createSlice({
  name: 'contactFormErr',
  initialState,
  reducers: {
    setContactFormErr: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setContactFormErr } = contactFormErrSlice.actions;

export default contactFormErrSlice.reducer;
export const getContactFormErr = (state: RootState) => state.contactFormErr;

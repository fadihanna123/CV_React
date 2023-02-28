import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

const initialState: string = '';

export const contactFormErrSlice = createSlice({
  name: 'contactFormErr',
  initialState,
  reducers: {
    setContactFormErr: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setContactFormErr } = contactFormErrSlice.actions;

export default contactFormErrSlice.reducer;
export const getContactFormErr = (state: RootState) => state.contactFormErr;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app/store';

const initialState = false;

export const loadingSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
export const getLoading = (state: RootState) => state.loading;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app/store';

const initialState: Menu[] = [];

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
export const getMenuState = (state: RootState) => state.menu;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from 'models';
import { RootState } from 'redux/store';

const initialState: Menu[] = [];

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<Menu[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
export const getMenuState = (state: RootState) => state.menu;

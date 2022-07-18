import { ActionTypes, Menu } from 'models';
import { SET_MENU } from 'utils/constants';

const initialState: Menu[] = [];

export const menuReducer = (
  state = initialState,
  { type, payload }: ActionTypes,
) => {
  switch (type) {
    case SET_MENU:
      return payload;

    default:
      return state;
  }
};

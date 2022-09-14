import { ActionTypes, Menu } from 'models';
import { SET_MENU } from 'utils/constants';

const initialState: Menu[] = [];

/**
 * Menu reducer.
 *
 * @param state
 * @param param1
 * @returns Menu array of objects.
 */

export const menuReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_MENU:
      return payload;

    default:
      return state;
  }
};

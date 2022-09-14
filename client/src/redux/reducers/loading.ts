import { ActionTypes } from 'models';
import { SET_LOADING } from 'utils/constants';

const initialState: boolean = false;

/**
 * Loading reducer.
 *
 * @param state
 * @param param1
 * @returns Boolean.
 */

export const loadingReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LOADING:
      return payload;

    default:
      return state;
  }
};

import { ActionTypes } from 'models';
import { SET_CONTACT_FORM } from 'utils/constants';

const initialState = {
  fullname: '',
  mail: '',
  phone: '',
  msg: '',
};

export const contactFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CONTACT_FORM:
      return payload;

    default:
      return state;
  }
};

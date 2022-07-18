import { combineReducers } from 'redux';

import { contactFormReducer } from './contactForm';
import { loadingReducer } from './loading';
import { menuReducer } from './menu';

export const allReducers = combineReducers({
  contactFormReducer,
  loadingReducer,
  menuReducer,
});

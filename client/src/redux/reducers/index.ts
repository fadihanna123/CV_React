import { combineReducers } from 'redux';

import { contactFormReducer } from './contactForm';
import { loadingReducer } from './loading';

export const allReducers = combineReducers({
  contactFormReducer,
  loadingReducer,
});

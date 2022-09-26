import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { allReducers } from 'redux/reducers';

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware())
);

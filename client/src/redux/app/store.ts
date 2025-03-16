import { configureStore } from '@reduxjs/toolkit';

// Components
import contactFormReducer from '../reducers/contactForm';
import loadingReducer from '../reducers/loading';
import menuReducer from '../reducers/menu';
import contactFormErrReducer from '../reducers/contactFormErr';
import contactFormAlertReducer from '../reducers/contactFormAlert';

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    loading: loadingReducer,
    menu: menuReducer,
    contactFormErr: contactFormErrReducer,
    contactFormAlert: contactFormAlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

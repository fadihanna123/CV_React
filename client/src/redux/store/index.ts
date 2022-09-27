import { configureStore } from '@reduxjs/toolkit';

import contactFormReducer from '../reducers/contactForm';
import loadingReducer from '../reducers/loading';
import menuReducer from '../reducers/menu';

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    loading: loadingReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

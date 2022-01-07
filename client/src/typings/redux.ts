import { ContactFormTypes } from 'typings';

export interface ActionTypes {
  type: string;
  payload: void;
}

export interface ContactFormReducerTypes {
  contactFormReducer: ContactFormTypes;
}

export interface LoadingReducerTypes {
  loadingReducer: boolean;
}

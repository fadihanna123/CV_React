import { ContactFormTypes } from 'models';

export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class ContactFormReducerTypes {
  constructor(public contactFormReducer: ContactFormTypes) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

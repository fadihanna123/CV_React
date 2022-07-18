import { ContactFormTypes, Menu } from 'models';

export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class ContactFormReducerTypes {
  constructor(payload?: any) {
    this.contactFormReducer = payload.contactFormReducer;
  }
  public contactFormReducer: ContactFormTypes;
}

export class LoadingReducerTypes {
  constructor(payload?: any) {
    this.loadingReducer = payload.loadingReducer;
  }
  public loadingReducer: boolean;
}

export class MenuReducerTypes {
  constructor(public menuReducer: Menu[]) {}
}

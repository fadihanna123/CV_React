import { ContactFormTypes } from "models";

export class ActionTypes {
    constructor(public type: string, public payload: void) {}
}

export class ContactFormReducerTypes {
    constructor(other?: any) {
        this.contactFormReducer = other.contactFormReducer;
    }
    public contactFormReducer: ContactFormTypes;
}

export class LoadingReducerTypes {
    constructor(other?: any) {
        this.loadingReducer = other.loadingReducer;
    }
    public loadingReducer: boolean;
}

import { ContactFormTypes } from "models";
import { SET_CONTACT_FORM, SET_LOADING } from "utils/constants";

export const setContactForm = (payload: ContactFormTypes): object => {
    return { type: SET_CONTACT_FORM, payload };
};

export const setLoading = (payload: boolean): object => {
    return { type: SET_LOADING, payload };
};

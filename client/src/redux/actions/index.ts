import { ContactFormTypes, Menu } from 'models';
import { AnyAction } from 'redux';
import { SET_CONTACT_FORM, SET_LOADING, SET_MENU } from 'utils/constants';

/**
 * Contact form action.
 *
 * @param payload
 * @returns Object.
 */

export const setContactForm = (payload: ContactFormTypes): object => {
  return { type: SET_CONTACT_FORM, payload };
};

/**
 * Menu action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setMenu = (payload: Menu[]): AnyAction => {
  return { type: SET_MENU, payload };
};

/**
 * Loading action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setLoading = (payload: boolean): AnyAction => {
  return { type: SET_LOADING, payload };
};

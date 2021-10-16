import { atom } from "recoil";
import { ContactFormTypes } from "typings";

export const contactFormState = atom<ContactFormTypes>({
  key: "contactFormState",
  default: {
    fullname: "",
    mail: "",
    phone: "",
    msg: "",
  },
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

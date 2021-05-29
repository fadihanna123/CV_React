import { atom } from "recoil";
import { ContactForm } from "typings";

export const contactFormState = atom<ContactForm>({
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

import { createState } from "@hookstate/core";

export const settingState = createState({
  contactForm: {
    fullname: "",
    mail: "",
    phone: "",
    msg: "",
  },
  setContactForm: {
    fullname: "",
    mail: "",
    phone: "",
    msg: "",
  },
  loading: false,
  setLoading: false,
});

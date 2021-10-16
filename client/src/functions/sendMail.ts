import { request } from "api";
import { Flip, toast } from "react-toastify";
import { ContactFormTypes } from "typings";

const sendMail = async (
  setLoading: (loading: boolean) => void,
  contactForm: ContactFormTypes
): Promise<void> => {
  try {
    const { REACT_APP_SEND_MAIL } = process.env;
    const endPoint: string | undefined = REACT_APP_SEND_MAIL;

    setLoading(true);

    await request(endPoint as string, "post", contactForm);
  } catch (err) {
    toast((err as Error).message, { transition: Flip, type: "error" });
  } finally {
    setLoading(false);
  }
};

export { sendMail };

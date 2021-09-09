import axios from "axios";
import { Flip, toast } from "react-toastify";
import { ContactForm, MailData } from "typings";

const sendMail = async (
  setLoading: (loading: boolean) => void,
  contactForm: ContactForm
): Promise<void> => {
  try {
    const { REACT_APP_SEND_MAIL } = process.env;
    const endPoint: string | undefined = REACT_APP_SEND_MAIL;

    setLoading(true);

    await axios.post<MailData>(endPoint as string, contactForm);
  } catch (err) {
    toast((err as Error).message, { transition: Flip, type: "error" });
  } finally {
    setLoading(false);
  }
};

export { sendMail };

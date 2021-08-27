import axios from "axios";
import { Flip, toast } from "react-toastify";
import { ContactForm, MailData } from "typings";

const sendMail = async (
  setLoading: (loading: boolean) => void,
  contactForm: ContactForm
): Promise<void> => {
  try {
    const endPoint: string = "mailit";

    setLoading(true);

    await axios.post<MailData>(endPoint, contactForm);
  } catch (err) {
    toast((err as Error).message, { transition: Flip, type: "error" });
  } finally {
    setLoading(false);
  }
};

export { sendMail };

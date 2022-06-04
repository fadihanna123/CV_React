import { ContactFormTypes } from "models";
import { Dispatch } from "redux";
import { setContactForm } from "redux/actions";

export const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    contactForm: ContactFormTypes,
    dispatch: Dispatch<any>
) =>
    dispatch(
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        })
    );

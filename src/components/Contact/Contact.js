import { useRef } from "react";
import useInput from "../../hooks/use-input";
import { IsEmailValid } from "../../helpers/Validation";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

const API_KEY = process.env.REACT_APP_EMAILJS_API_KEY;

const Contact = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const textInputRef = useRef();

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(IsEmailValid);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!emailHasError) {
      const payload = {
        from_email: emailInputRef.current.value,
        from_name: nameInputRef.current.value,
        message: textInputRef.current.value,
      };

      emailjs.send("gmail", "contact_sperthix", payload, API_KEY).then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
          console.log(
            "Email sent successfully, I will reach you back ASAP :)",
            response.status,
            response.text
          );
        },
        function (error) {
          alert("FAILED...", error);
          console.log("FAILED...", error);
        }
      );
      event.target.reset();
      resetEmail();
    }
  };

  return (
    <section className={styles.page}>
      <div className={styles.formContainer}>
        <form onSubmit={submitFormHandler}>
          <h2>Contact me</h2>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            ref={nameInputRef}
          ></input>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            ref={emailInputRef}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          ></input>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            placeholder="Message"
            ref={textInputRef}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

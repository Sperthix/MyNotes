import { Fragment, useRef } from "react";

import styles from "./PopUpForm.module.css";

const PopUpForm = (props) => {
  const firstInput = useRef();
  const secondInput = useRef();

  let isChangingEmail;
  if (props.changing === "EMAIL") {
    isChangingEmail = true;
  } else {
    isChangingEmail = false;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    // ADD VALIDATION
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.inputForm}>
        <h2>Changing {props.changing}</h2>
      {isChangingEmail && (
        <Fragment>
          <label>New email</label>
          <input type="email" id="email" ref={firstInput}></input>
          <label>Confirm email</label>
          <input type="email" id="confirm-email" ref={secondInput}></input>
        </Fragment>
      )}
      {!isChangingEmail && (
        <Fragment>
          <label>New password</label>
          <input type="password" id="password" ref={firstInput}></input>
          <label>Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            ref={secondInput}
          ></input>
        </Fragment>
      )}
      <button type="submit">Submit change</button>
    </form>
  );
};

export default PopUpForm;

import { Fragment, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../../context/auth-actions";
import { useNavigate } from "react-router-dom";
import {
  IsPasswordStrong,
  CheckEquality,
  IsEmailValid,
} from "../../helpers/Validation";

import styles from "./PopUpForm.module.css";

let error1 = "input is not valid";
let error2 = "input is not valid";

const PopUpForm = (props) => {
  const firstInput = useRef();
  const secondInput = useRef();

  const [onError, setOnError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idToken = useSelector((state) => state.auth.token);

  let isChangingEmail;
  if (props.changing === "Email") {
    isChangingEmail = true;
  } else {
    isChangingEmail = false;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (isChangingEmail) {
      const validEmail = IsEmailValid(firstInput.current.value);
      const emailMatches = CheckEquality(
        firstInput.current.value,
        secondInput.current.value
      );
      if (!validEmail) {
        error1 = "This email is not valid";
        error2 = "";
        setOnError(true);
        return;
      }
      if (!emailMatches) {
        error1 = "";
        error2 = "Emails do not match!";
        setOnError(true);
        return;
      }
    } else {
      const validPassword = IsPasswordStrong(firstInput.current.value);
      const passwordMatches = CheckEquality(
        firstInput.current.value,
        secondInput.current.value
      );
      if (!validPassword) {
        error1 = "Password is not strong enough";
        error2 = "";
        return;
      }
      if (!passwordMatches) {
        error1 = "";
        error2 = "Passwords do not match!";
        return;
      }
      dispatch(changePassword(idToken, firstInput.current.value));
    }
    console.log("input is valid");
    navigate("/profile");
    setOnError(false);
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.inputForm}>
      <h2>Changing {props.changing}</h2>
      {isChangingEmail && (
        <Fragment>
          <label>New email</label>
          <input type="email" id="email" ref={firstInput}></input>
          {onError && <span className={styles.error}>{error1}</span>}
          <label>Confirm email</label>
          <input type="email" id="confirm-email" ref={secondInput}></input>
          {onError && <span className={styles.error}>{error2}</span>}
        </Fragment>
      )}
      {!isChangingEmail && (
        <Fragment>
          <label>New password</label>
          <input type="password" id="password" ref={firstInput}></input>
          {onError && <span className={styles.error}>{error1}</span>}
          <label>Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            ref={secondInput}
          ></input>
          {onError && <span className={styles.error}>{error2}</span>}
        </Fragment>
      )}
      <button type="submit">Submit change</button>
    </form>
  );
};

export default PopUpForm;

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../../context/userDetail-slice";
import useInput from "../../hooks/use-input";
import {
  IsEmailValid,
  IsPasswordStrong,
  CheckEquality,
} from "../../helpers/Validation";

import {
  sendSignUpRequest,
  sendLoginRequest,
} from "../../context/auth-actions";

import styles from "./AuthForm.module.css";

const AuthForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasAcc, setHasAcc] = useState(true);
  let formIsValid = false;

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(IsEmailValid);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(IsPasswordStrong);

  const {
    value: enteredPassword2,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2,
  } = useInput(IsPasswordStrong);

  // set state based on from which page is this component called
  useEffect(() => {
    if (props.from === "login") setHasAcc(true);
    else setHasAcc(false);
  }, [props.from]);

  useEffect(() => {
    // clear old data before loggin in new user - just in case, but should be already clean
    dispatch(userDetailsActions.clearUserData());
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (hasAcc) {
      dispatch(
        sendLoginRequest(
          emailInputRef.current.value,
          passwordInputRef.current.value
        )
      );
      navigate("/profile");
    } else {
      // *TODO* add form verification
      dispatch(
        sendSignUpRequest(
          emailInputRef.current.value,
          passwordInputRef.current.value
        )
      );
      navigate("/login");
    }
    resetEmail();
    resetPassword();
    resetPassword2();
  };

  const changePageHandler = () => {
    if (hasAcc) {
      navigate("/signup");
      setHasAcc(false);
    } else {
      navigate("/login");
      setHasAcc(true);
    }
  };

  let pwsAreEqual = CheckEquality(enteredPassword, enteredPassword2);
  let displayPw2Error = false;
  if (!pwsAreEqual || password2HasError) displayPw2Error = true;

  if (hasAcc) {
    if (emailIsValid) formIsValid = true;
  } else {
    if (emailIsValid && passwordIsValid && password2IsValid) formIsValid = true;
  }

  return (
    <section className={styles.auth}>
      {hasAcc && <h1>Login to account</h1>}
      {!hasAcc && <h1>Create an account</h1>}
      <form onSubmit={submitHandler}>
        <div className={styles.userInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            placeholder="Enter your email"
            required
          ></input>
          {emailHasError && (
            <p className={styles.errorText}>Email is not valid</p>
          )}
        </div>
        <div className={styles.userInput}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            placeholder="Enter your password"
            required
          ></input>
          {!hasAcc && passwordHasError && (
            <p className={styles.errorText}>Password is not strong enough</p>
          )}
        </div>
        {!hasAcc && (
          <div className={styles.userInput}>
            <label htmlFor="password2">Confirm password</label>
            <input
              type="password"
              id="password2"
              ref={password2InputRef}
              onChange={password2ChangeHandler}
              onBlur={password2BlurHandler}
              value={enteredPassword2}
              placeholder="Confirm your password"
              required
            ></input>
            {displayPw2Error && (
              <p className={styles.errorText}>Passwords do not match!</p>
            )}
          </div>
        )}
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </form>
      {!hasAcc && (
        <div>
          <p className={styles.question}>Already have an account?</p>
          <button
            className={styles.change}
            type="button"
            onClick={changePageHandler}
          >
            Log in
          </button>
        </div>
      )}
      {hasAcc && (
        <div>
          <p className={styles.question}>Not registered?</p>
          <button
            className={styles.change}
            type="button"
            onClick={changePageHandler}
          >
            Create an account
          </button>
        </div>
      )}
    </section>
  );
};

export default AuthForm;

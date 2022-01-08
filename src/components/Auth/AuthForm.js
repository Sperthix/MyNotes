import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../../context/userDetail-slice";

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

  // set state based on from which page is this component called
  useEffect(() => {
    if (props.from === "login") setHasAcc(true);
    else setHasAcc(false);
  }, [props.from]);

  useEffect(() => {
    // clear old data before loggin in new user - not good implementation, but it works for now (:
    dispatch(
      userDetailsActions.setUserData({
        name: "",
        username: "",
        age: "",
        email: "",
        address: "",
      })
    );
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
            placeholder="Enter your email"
            required
          ></input>
        </div>
        <div className={styles.userInput}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            placeholder="Enter your password"
            required
          ></input>
        </div>
        {!hasAcc && (
          <div className={styles.userInput}>
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              id="password2"
              ref={password2InputRef}
              placeholder="And repeat it"
              required
            ></input>
          </div>
        )}
        <button type="submit">Submit</button>
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

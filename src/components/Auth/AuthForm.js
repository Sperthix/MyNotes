import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  const submitHandler = (event) => {
    event.preventDefault();
    if (hasAcc) {
      dispatch(
        sendLoginRequest(
          emailInputRef.current.value,
          passwordInputRef.current.value
        )
      );
    } else {
      // *TODO* add form verification
      dispatch(
        sendSignUpRequest(
          emailInputRef.current.value,
          passwordInputRef.current.value
        )
      );
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
          <input type="email" id="email" ref={emailInputRef} required></input>
        </div>
        <div className={styles.userInput}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
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

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserDetails } from "../../context/userDetail-actions";

import styles from "./Profile.module.css";

const ProfileEdit = (props) => {
  const enteredName = useRef();
  const enteredUsername = useRef();
  const enteredAge = useRef();
  const enteredEmail = useRef();
  const enteredAddress = useRef();

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.details);

  const submitHandler = (event) => {
    event.preventDefault();
    // add VALIDATION
    dispatch(
      sendUserDetails({
        fullName: enteredName.current.value,
        username: enteredUsername.current.value,
        age: enteredAge.current.value,
        email: enteredEmail.current.value,
        address: enteredAddress.current.value,
      })
    );
    props.changeBack();
  };

  return (
    <section>
      <form onSubmit={submitHandler} className={styles.list}>
        <p className={styles.label}>Full name</p>
        <input
          className={styles.input}
          id="fullName"
          type="text"
          defaultValue={userDetails.fullName}
          ref={enteredName}
        ></input>

        <p className={styles.label}>Username</p>
        <input
          className={styles.input}
          id="username"
          type="text"
          defaultValue={userDetails.username}
          ref={enteredUsername}
        ></input>

        <p className={styles.label}>Age</p>
        <input
          className={styles.input}
          id="age"
          type="number"
          defaultValue={userDetails.age}
          ref={enteredAge}
        ></input>

        <p className={styles.label}>Email</p>
        <input
          className={styles.input}
          id="email"
          type="email"
          defaultValue={userDetails.email}
          ref={enteredEmail}
        ></input>

        <p className={styles.label}>Address</p>
        <input
          className={styles.input}
          id="address"
          type="text"
          defaultValue={userDetails.address}
          ref={enteredAddress}
        ></input>
        <button className={styles.submitButton} type="submit">
          Submit changes
        </button>
      </form>
    </section>
  );
};

export default ProfileEdit;

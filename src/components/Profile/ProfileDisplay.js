import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "./Profile.module.css";
import Modal from "../UI/Modal";
import PopUpForm from "./PopUpForm";

const ProfileDisplay = () => {
  const [changingEmail, setIsChangingEmail] = useState(false);
  const [changingPassword, setIsChangingPassword] = useState(false);

  const userDetails = useSelector((state) => state.userDetails.details);

  const changeEmailHalnder = () => {
    setIsChangingEmail(true);
  };

  const changePasswordHalnder = () => {
    setIsChangingPassword(true);
  };

  const backdropCloseHandler = () => {
    if (changingEmail) setIsChangingEmail(false);
    else setIsChangingPassword(false);
  };

  return (
    <section>
      {changingEmail && (
        <Modal onClose={backdropCloseHandler}>
          <PopUpForm changing="Email" />
        </Modal>
      )}
      {changingPassword && (
        <Modal onClose={backdropCloseHandler}>
          <PopUpForm changing="Password" />
        </Modal>
      )}
      <div className={styles.list}>
        <p className={styles.label}>Full name</p>
        <p className={styles.data}>{userDetails.fullName}</p>

        <p className={styles.label}>Username</p>
        <p className={styles.data}>{userDetails.username}</p>

        <p className={styles.label}>Age</p>
        <p className={styles.data}>{userDetails.age}</p>

        <p className={styles.label}>Email</p>
        <p className={styles.data}>{userDetails.email}</p>

        <p className={styles.label}>Address</p>
        <p className={styles.data}>{userDetails.address}</p>
      </div>
      <div className={styles.change} onClick={changeEmailHalnder}>
        Change email address
      </div>
      <div className={styles.change} onClick={changePasswordHalnder}>
        Change password
      </div>
    </section>
  );
};

export default ProfileDisplay;

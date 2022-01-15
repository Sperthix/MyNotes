import { useState, useEffect } from "react";

import ProfileDisplay from "./ProfileDisplay";
import ProfileEdit from "./ProfileEdit";

import styles from "./Profile.module.css";

import Modal from "../UI/Modal";
import PopUpForm from "./PopUpForm";

import { getUserDetails } from "../../context/userDetail-actions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [changingEmail, setIsChangingEmail] = useState(false);
  const [changingPassword, setIsChangingPassword] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.uid);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch, currentUser]);

  const editChangeHandler = () => {
    setEdit((prevState) => !prevState);
  };

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
    <div className={styles.page}>
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
      <h1>Profile Page</h1>
      <button type="button" className={styles.edit} onClick={editChangeHandler}>
        Edit
      </button>
      {edit && <ProfileEdit changeBack={editChangeHandler} />}
      {!edit && (
        <ProfileDisplay
          changeEmail={changeEmailHalnder}
          changePassword={changePasswordHalnder}
        />
      )}
    </div>
  );
};

export default Profile;

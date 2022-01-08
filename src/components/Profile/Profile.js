import { useState, useEffect } from "react";

import ProfileDisplay from "./ProfileDisplay";
import ProfileEdit from "./ProfileEdit";

import styles from "./Profile.module.css";
import { getUserDetails } from "../../context/userDetail-actions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.uid)

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch, currentUser]);

  const editChangeHandler = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <div className={styles.page}>
      <h1>Profile Page</h1>
      <button type="button" className={styles.edit} onClick={editChangeHandler}>
        Edit
      </button>
      {edit && <ProfileEdit changeBack={editChangeHandler} />}
      {!edit && <ProfileDisplay />}
    </div>
  );
};

export default Profile;

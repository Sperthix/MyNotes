import { useState } from "react";

import ProfileDisplay from "./ProfileDisplay";
import ProfileEdit from "./ProfileEdit";
import Card from "../UI/Card";

import styles from "./Profile.module.css";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  const editChangeHandler = () => {
    setEdit((prevState) => !prevState);
    console.log(edit);
  };

  return (
    <div className={styles.page}>
      <h1>Profile Page</h1>
      <button type="button" className={styles.edit} onClick={editChangeHandler}>
        Edit
      </button>
      {edit && <ProfileEdit />}
      {!edit && <ProfileDisplay />}
    </div>
  );
};

export default Profile;

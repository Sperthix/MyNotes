import { useSelector } from "react-redux";

import styles from "./Profile.module.css";

const ProfileDisplay = (props) => {
  const userDetails = useSelector((state) => state.userDetails.details);

  return (
    <section>
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
      <div className={styles.change} onClick={props.changeEmail}>
        Change email address
      </div>
      <div className={styles.change} onClick={props.changePassword}>
        Change password
      </div>
    </section>
  );
};

export default ProfileDisplay;

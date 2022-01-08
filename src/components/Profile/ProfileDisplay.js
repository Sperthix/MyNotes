import { useSelector } from "react-redux";

import styles from "./Profile.module.css";

const ProfileDisplay = () => {
  const userDetails = useSelector((state) => state.userDetails.details);

  return (
    <section>
      <div className={styles.list}>
        <p className={styles.label}>Full name</p>
        <p className={styles.data}>{userDetails.name}</p>

        <p className={styles.label}>Username</p>
        <p className={styles.data}>{userDetails.username}</p>

        <p className={styles.label}>Age</p>
        <p className={styles.data}>{userDetails.age}</p>

        <p className={styles.label}>Email</p>
        <p className={styles.data}>{userDetails.email}</p>

        <p className={styles.label}>Address</p>
        <p className={styles.data}>{userDetails.address}</p>
      </div>
      <div className={styles.change}>Change email address</div>
      <div className={styles.change}>Change password</div>
    </section>
  );
};

export default ProfileDisplay;

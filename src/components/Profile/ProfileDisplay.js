import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../context/auth-actions";
import { authActions } from "../../context/auth-slice";

import styles from "./Profile.module.css";

const ProfileDisplay = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.details);
  const idToken = useSelector((state) => state.auth.token);

  const deleteAccHandler = () => {
    dispatch(deleteUser(idToken));
    dispatch(authActions.logout());
    navigate("/welcome");
  };

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
      <button
        className={styles.delete}
        type="button"
        onClick={deleteAccHandler}
      >
        Delete this account
      </button>
    </section>
  );
};

export default ProfileDisplay;

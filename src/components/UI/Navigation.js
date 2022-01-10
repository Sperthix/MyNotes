import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../context/auth-slice";

import styles from "./Navigation.module.css";
import { userDetailsActions } from "../../context/userDetail-slice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.userDetails.details.username)

  const goHome = () => {
    navigate("/welcome");
  };

  const logoutHandler = () => {
    dispatch(userDetailsActions.clearUserData())
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <h1 onClick={goHome}>Sperthix.hopto.org</h1>
      <ul>
        {/* homepage */}
        <li>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        {/* Login button */}
        {!isAuthorized && (
          <li>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </li>
        )}
        {/* Profile page */}
        {isAuthorized && (
          <li>
            <Link className={styles.link} to="/profile">
              {username}
            </Link>
          </li>
        )}
        {/* Logout button */}
        {isAuthorized && (
          <li>
            <Link className={styles.link} to="/welcome" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

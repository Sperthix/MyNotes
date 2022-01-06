import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../context/auth-slice";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.uid)

  const goHome = () => {
    navigate("/welcome");
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <h1 onClick={goHome}>Sperthix.hopto.org</h1>
      <p>{isAuthorized}</p>
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

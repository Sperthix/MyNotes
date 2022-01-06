import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../context/auth-slice";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isLoggedIn);
  
  const goHome = () => {
    navigate("/welcome");
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <h1 onClick={goHome}>Sperthix.hopto.org</h1>
      <ul>
        <li>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        {!isAuthorized && (
          <li>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </li>
        )}
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
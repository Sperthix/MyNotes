import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <h1>Sperthix.hopto.org</h1>
      <ul>
        <li>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/home">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

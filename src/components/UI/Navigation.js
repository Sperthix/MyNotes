import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <h1>Sperthix.hopto.org</h1>
      <ul>
        <li>
          <button>Other Apps</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

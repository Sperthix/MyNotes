import Navigation from "./Navigation";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.page}>
      <nav>
        <Navigation />
      </nav>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;

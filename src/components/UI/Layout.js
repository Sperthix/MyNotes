import { Fragment } from "react";

import Navigation from "./Navigation";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className={styles.page}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

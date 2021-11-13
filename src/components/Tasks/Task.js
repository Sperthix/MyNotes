import { Fragment } from "react";

import styles from "./Task.module.css";

const Task = (props) => {
  return (
    <Fragment>
      <li className={styles.task}>
        <label>{props.label}</label>
      </li>
    </Fragment>
  );
};

export default Task;

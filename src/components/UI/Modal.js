import { Fragment } from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={styles.backdrop} onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <div className={styles.overlay}>{props.children}</div>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;

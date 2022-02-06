import { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Modal from "../UI/Modal";
import { Document, Page } from "react-pdf";
import CV from "../../assets/CV.pdf";
import CV_base64 from "../../assets/cv_base64.txt";

import styles from "./AboutMe.module.css";
import avatar from "../../assets/avatar.jpg";

const AboutMe = () => {
  const [showPdf, setShowPdf] = useState(false);
  const spanRef = useRef();

  useEffect(() => {
    init(spanRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Front-end", "Developer", "Freelance", "ReactJS"],
    });
  }, []);

  const openCvHandler = () => {
    setShowPdf(true);
  };

  const backdropCloseHandler = () => {
    setShowPdf(false);
  };

  return (
    <section className={styles.page}>
      {showPdf && (
        <Modal onClose={backdropCloseHandler}>
          <object data={CV} type="application/pdf" width="100%" height="100%" />
          {/* <Document file={CV_base64}>
            <Page pageNumber={0} />
          </Document> */}
        </Modal>
      )}
      <div>
        <img src={avatar} alt="profile picture of Matus Buci" />
      </div>
      <div>
        <span>Hi, I am</span>
        <br />
        <span className={styles.name}>Matúš Búci</span>
        <div>
          <span ref={spanRef}></span>
        </div>
        <div className={styles.icons}>
          <a
            className={styles.icon}
            target="_blank"
            href="https://www.facebook.com/matus.buci.9/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className={styles.icon}
            target="_blank"
            href="https://github.com/Sperthix?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/matus-buci-224b46230/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <button className={styles.cv} type="click" onClick={openCvHandler}>
          CV
        </button>
      </div>
    </section>
  );
};

export default AboutMe;

import styles from "./Welcome.module.css";

import arrow from "../../assets/arrow-down.svg";

const Welcome = () => {
  return (
    <section className={styles.page}>
      <h1>Welcome to my website</h1>
      <section>
        <span>Multifunctional webpage</span>
        <span>Built with React</span>
        <div id="portfolio">
          Portfolio
          <img src={arrow}></img>
        </div>
      </section>
    </section>
  );
};

export default Welcome;

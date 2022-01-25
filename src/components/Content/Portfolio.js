import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.page}>
      <h1>My projects</h1>
      <div>Todo-list</div>
      <div>Food-order App</div>
      <div>Expence tracker</div>
      <div>ReactionTimeTest</div>
      <div>Weather forecast</div>
    </section>
  );
};

export default Portfolio;

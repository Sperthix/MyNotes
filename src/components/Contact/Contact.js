import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.page}>
      <div className={styles.formContainer}>
        <form>
          <h2>Contact me</h2>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

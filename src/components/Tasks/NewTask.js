import styles from "./NewTask.module.css";

const NewTask = () => {
  return (
    <form>
      <div className={styles.form}>
        <label htmlFor="newTask">Type in new task</label>
        <input id="newTask" type="text"></input>
        <button type="button">Add</button>
      </div>
    </form>
  );
};

export default NewTask;

import { useContext, useRef, useState } from "react";
import TodosContext from "../../context/todos-context";

import styles from "./NewTask.module.css";

const NewTask = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef();
  const [isEmpty, setIsEmpty] = useState(true);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const inputChangeHandler = () => {
    if (inputRef.current.value.trim().length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const submitNewTaskHandler = (event) => {
    event.preventDefault();
    setWasSubmitted(true);
    if (isEmpty) {
      return;
    } else if (!isEmpty) {
      console.log(`sending new todo: ${inputRef.current.value.trim()}`);
      const genId = `t${todosCtx.todos.length + 1}`;
      console.log(genId);
      todosCtx.addTodo({ label: inputRef.current.value, id: genId });
      setWasSubmitted(false);
    }
  };

  const inputStyles = `${styles.form} ${
    wasSubmitted && isEmpty ? styles.invalid : ""
  }`;

  return (
    <form onSubmit={submitNewTaskHandler}>
      <div className={inputStyles}>
        <label htmlFor="newTask">Type in new task</label>
        <input
          id="newTask"
          type="text"
          ref={inputRef}
          onChange={inputChangeHandler}
        ></input>
        <button type="submit">Add</button>
        {wasSubmitted && isEmpty && (
          <p className={styles.invalid}>
            Please enter some task before submitting.
          </p>
        )}
      </div>
    </form>
  );
};

export default NewTask;

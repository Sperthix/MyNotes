import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { todosActions } from "../../context/todos-slice";

import styles from "./NewTask.module.css";

const NewTask = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);
  const inputRef = useRef();
  const [newTaskValue, setNewTaskValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  let newId;

  const inputChangeHandler = () => {
    setNewTaskValue(inputRef.current.value);
    if (inputRef.current.value.trim().length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const generateNewID = () => {
    const newID = Math.floor(Math.random() * 5000);
    return newID;
  };

  const checkForValidID = (newID) => {
    for (let i = 0; i < todoList.length; i++) {
      if (newID === parseFloat(todoList[i].id)) {
        // console.log(`ID conflict. New ID: ${newID} usedID: ${todosCtx.todos[i].id}`);
        return false;
      }
    }
    // console.log(`adding to the list, new ID: ${newID}`);
    return true;
  };

  const addToList = () => {
    newId = generateNewID();
    if (checkForValidID(newId)) {
      dispatch(todosActions.addNewtodo({ label: inputRef.current.value, id: newId }));
      setNewTaskValue("");
    } else {
      addToList();
    }
  };

  const submitNewTaskHandler = (event) => {
    event.preventDefault();
    setWasSubmitted(true);
    if (isEmpty) {
      return;
    } else if (!isEmpty) {
      addToList();
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
          value={newTaskValue}
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

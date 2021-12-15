import { useSelector, useDispatch } from "react-redux";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { sendTodoList } from "../../context/todos-actions";

import styles from "./Tasks.module.css";

const Tasks = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const saveDataHandler = () => {
    dispatch(sendTodoList(todos));
  };

  return (
    <section className={styles.tasks}>
      <h1>ToDo List</h1>
      <NewTask />
      <TaskList />
      <button className={styles.button} onClick={saveDataHandler}>
        Save
      </button>
    </section>
  );
};

export default Tasks;

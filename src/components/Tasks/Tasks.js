import NewTask from "./NewTask";
import TaskList from "./TaskList";

import styles from './Tasks.module.css';

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <NewTask />
      <TaskList />
    </div>
  );
};

export default Tasks;

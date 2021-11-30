import { Fragment } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <Fragment>
      <NewTask />
      <TaskList />
    </Fragment>
  );
};

export default Tasks;

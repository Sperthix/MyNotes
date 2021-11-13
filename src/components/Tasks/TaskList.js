import { useContext } from "react";
import TodosContext from "../../context/todos-context";
import Task from "./Task";

const TaskList = () => {
  const TodosCtx = useContext(TodosContext);

  const activeTasks = TodosCtx.todos.map((task) => {
    return <Task label={task.label} key={task.id} />;
  });

  return <ul>{activeTasks}</ul>;
};

export default TaskList;

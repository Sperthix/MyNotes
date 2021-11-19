import { useContext } from "react";
import TodosContext from "../../context/todos-context";
import Task from "./Task";

const TaskList = () => {
  const TodosCtx = useContext(TodosContext);

  const todoDeleteHandler = (id) => {
    // console.log("todoDeleteHandler: " + id)
    TodosCtx.removeTodo(id);
  };

  const activeTasks = TodosCtx.todos.map((task) => {
    return <Task label={task.label} key={task.id} id={task.id} onDelete={todoDeleteHandler}/>;
  });

  return <ul>{activeTasks}</ul>;
};

export default TaskList;

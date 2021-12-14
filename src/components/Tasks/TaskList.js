import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../../context/todos-slice";

import Task from "./Task";

const TaskList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);

  const todoDeleteHandler = (id) => {
    dispatch(todosActions.removeTodo(id));
  };

  const activeTasks = todoList.map((task) => {
    return (
      <Task
        label={task.label}
        key={task.id}
        id={task.id}
        onDelete={todoDeleteHandler}
      />
    );
  });

  return <ul>{activeTasks}</ul>;
};

export default TaskList;

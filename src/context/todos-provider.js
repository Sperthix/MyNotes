import { useState } from "react";

import TodosContext from "./todos-context";

const DUMMY_TODOS = [
  {
    label: "Create ToDo list",
    id: "1",
  },
  {
    label: "Add multiple users",
    id: "2",
  },
  {
    label: "Add database (firebase)",
    id: "3",
  },
  {
    label: "Add authentification",
    id: "4",
  },
  {
    label: "Add my own database on server using nodeJS",
    id: "5",
  },
];

const TodosProvider = (props) => {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const clearTodosHandler = () => {
    setTodos([]);
  };

  const todosContext = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    clearTodos: clearTodosHandler,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;

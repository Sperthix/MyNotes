import { useState } from "react";

import TodosContext from "./todos-context";

const DUMMY_TODOS = [
  {
    label: "Create ToDo list",
    id: "t1",
  },
  {
    label: "Add multiple users",
    id: "t2",
  },
  {
    label: "Add database (firebase)",
    id: "t3",
  },
  {
    label: "Add authentification",
    id: "t4",
  },
  {
    label: "Add my own database on server using nodeJS",
    id: "t5",
  },
];

const TodosProvider = (props) => {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    console.log("adding new todo to the list in provider");
    setTodos([...todos, todo]);
  };

  const removeTodoHandler = (id) => {};

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

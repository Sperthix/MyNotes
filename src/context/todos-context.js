import React from "react";

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

const TodosContext = React.createContext({
    todos: DUMMY_TODOS,
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    clearTodos: () => {}
});

export default TodosContext;

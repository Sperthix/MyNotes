import React from "react";

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

const TodosContext = React.createContext({
    todos: DUMMY_TODOS,
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    clearTodos: () => {}
});

export default TodosContext;

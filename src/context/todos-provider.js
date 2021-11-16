import { useReducer } from "react";

import TodosContext from "./todos-context";

const defaultTodos = {
  todos: [],
  user: "DUMMY_USER",
};

const todosReducer = (state, action) => {
  if (action.type === "ADD") {
      console.log('adding todo in provider');
      console.log(action.payload);
    return {};
  }
  if (action.type === "REMOVE") {
  }
  if (action.type === "CLEAR") {
  }
};

const TodosProvider = (props) => {
  // dopozeraj udemy, ak neprides na to, co je tu zle urobene, prerob useReducer na useState a skus to tak. Pri najhrosom to prepis cez props chain
  const [todosState, dispatchTodosAction] = useReducer(
    todosReducer,
    defaultTodos
  );

  const addTodoHandler = (todo) => {
    dispatchTodosAction({
      type: "ADD",
      payload: todo,
    });
  };

  const removeTodoHandler = (id) => {
    dispatchTodosAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const clearTodosHandler = () => {
    dispatchTodosAction({ type: "CLEAR" });
  };

  console.log("hello?");
  console.log(DUMMY_TODOS);

  const finalContext = {
    todos: todosState.todos,
    user: todosState.user,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    clearTodos: clearTodosHandler,
  };

  return (
    <TodosContext.Provider value={finalContext}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;

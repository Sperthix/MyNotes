import { todosActions } from "./todos-slice";

export const fetchTodoList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-tutorial-dd1ce-default-rtdb.europe-west1.firebasedatabase.app/todo-list.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from database.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const todosData = await fetchData();
      dispatch(
        todosActions.replaceTodos({
          todos: todosData.todos || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendTodoList = (todos) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-tutorial-dd1ce-default-rtdb.europe-west1.firebasedatabase.app/todo-list.json",
        {
          method: "PUT",
          body: JSON.stringify({
            todos: todos,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
    };
    try {
      await sendRequest();
      console.log("Data sent successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

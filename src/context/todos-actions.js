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

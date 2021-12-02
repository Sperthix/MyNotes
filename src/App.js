import Tasks from "./components/Tasks/Tasks";
import List from "./components/SideList/List";
import { fetchTodoList } from "./context/todos-actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])

  return (
    <div>
      <Tasks />
      <List />
    </div>
  );
}

export default App;

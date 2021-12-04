import Tasks from "./components/Tasks/Tasks";
import List from "./components/SideList/List";
import { fetchTodoList } from "./context/todos-actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from './App.module.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Tasks className={styles.todos} />
      <List className={styles.sideList}/>
    </div>
  );
}

export default App;

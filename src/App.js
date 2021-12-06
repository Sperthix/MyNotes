import Tasks from "./components/Tasks/Tasks";
import List from "./components/SideList/List";
import { fetchTodoList } from "./context/todos-actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.css";

function App() {
  const sideList = useSelector((state) => state.sideList.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const sideListEmptyCheck = () => {
    if (sideList.length === 0) return true;
      else return false;
  }

  const isSideListEmpty = sideListEmptyCheck();

  return (
    <div className={styles.app}>
      <Tasks className={styles.todos} />
      {!isSideListEmpty && <List className={styles.sideList} />}
    </div>
  );
}

export default App;

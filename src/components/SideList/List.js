import styles from "./List.module.css";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { sendTodoList } from "../../context/todos-actions";

const List = () => {
  const sideList = useSelector((state) => state.sideList.list);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(sendTodoList(todos));
  };

  const itemList = sideList.map((item) => {
    return <Item label={item.label} key={item.id} id={item.id} />;
  });

  return (
    <div className={styles.list}>
      <ul className={styles.list}>{itemList}</ul>
      <button
        className={styles.button}
        type="submit"
        onClick={buttonClickHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default List;

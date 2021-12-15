import styles from "./List.module.css";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { sendTodoList } from "../../context/todos-actions";
import { sideListActions } from "../../context/sideList-slice";

const List = () => {
  const sideList = useSelector((state) => state.sideList.list);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(sideListActions.clearList())
    dispatch(sendTodoList(todos));
  };

  const itemList = sideList.map((item) => {
    return <Item label={item.label} key={item.id} id={item.id} />;
  });

  return (
    <section className={styles.list}>
      <h1>Already done</h1>
      <ul>{itemList}</ul>
      <button
        className={styles.button}
        type="submit"
        onClick={buttonClickHandler}
      >
        Submit
      </button>
    </section>
  );
};

export default List;

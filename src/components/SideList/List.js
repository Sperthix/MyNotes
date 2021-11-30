import styles from "./List.module.css";
import Item from "./Item";
import Card from "../UI/Card"
import { useDispatch, useSelector } from "react-redux";
import { sideListActions } from "../../context/sideList-slice";

const List = () => {
  const dispatch = useDispatch();
  const sideList = useSelector(state => state.sideList.list);

  const odDeleteHandler = (id) => {
    dispatch(sideListActions.removeItem(id));
  }

  const itemList = sideList.map((item) => {
    return (
      <Item
        label={item.label}
        key={item.id}
        id={item.id}
        onDelete={odDeleteHandler}
      />
    );
  });

  return (
    <Card>
        <ul className={styles.list}>{itemList}</ul>
        <button className={styles.button} type="submit">
          Submit
        </button>
    </Card>
  );
};

export default List;

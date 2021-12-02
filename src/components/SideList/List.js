import styles from "./List.module.css";
import Item from "./Item";
import Card from "../UI/Card"
import { useSelector } from "react-redux";

const List = () => {
  const sideList = useSelector(state => state.sideList.list);

  const itemList = sideList.map((item) => {
    return (
      <Item
        label={item.label}
        key={item.id}
        id={item.id}
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

import Card from "../UI/Card";
import { useContext } from "react";

import styles from "./List.module.css";
import SideListContext from "../../context/sideList-context";
import SideListProvider from "../../context/sideList-provider";
import Item from "./Item";

const List = () => {
  const sideListCtx = useContext(SideListContext);
  const itemList = sideListCtx.list.map((item) => {
    return (
      <Item
        label={item.label}
        key={item.id}
        id={item.id}
        onDelete={sideListCtx.removeItem()}
      />
    );
  });

  return (
    <Card>
      <SideListProvider>
        <ul className={styles.list}>{itemList}</ul>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </SideListProvider>
    </Card>
  );
};

export default List;

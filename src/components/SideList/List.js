import { useContext } from "react";

import styles from "./List.module.css";
import SideListContext from "../../context/sideList-context";
import Item from "./Item";
import SideListProvider from "../../context/sideList-provider";

const List = () => {

  const delHandler = (id) => {
    console.log("sem sa dostanem?")
    console.log(sideListCtx);
    sideListCtx.removeItem(id)
  }

  const sideListCtx = useContext(SideListContext);
  const itemList = sideListCtx.list.map((item) => {
    return (
      <Item
        label={item.label}
        key={item.id}
        id={item.id}
        onDelete={delHandler}
      />
    );
  });

  return (
    <SideListProvider>
        <ul className={styles.list}>{itemList}</ul>
        <button className={styles.button} type="submit">
          Submit
        </button>
    </SideListProvider>
  );
};

export default List;

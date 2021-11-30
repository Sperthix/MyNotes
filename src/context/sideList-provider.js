import { useState } from "react";

import SideListContext from "./sideList-context";

const SideListProvider = (props) => {
  const [sideList, setSideList] = useState();

  const addItemHandler = (newItem) => {
    console.log("im in sideList Provider");

    setSideList([
     ...sideList ,
      {
        label: newItem,
        id: Math.floor(Math.random() * 5000),
      },
    ]);
  };

  const removeItemHandler = (id) => {
    console.log("delete - CTX provider")
    setSideList(sideList.filter((item) => item.id !== id));
  };

  const submitHandler = () => {
    setSideList([]);
  };

  const sideListContext = {
    list: sideList,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    submit: submitHandler,
  };

  return (
    <SideListContext.Provider value={sideListContext}>
      {props.children}
    </SideListContext.Provider>
  );
};

export default SideListProvider;

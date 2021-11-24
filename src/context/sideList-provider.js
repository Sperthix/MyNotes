import { useState } from "react";

import SideListContext from "./sideList-context";

const DUMMY_ITEM = [{
  label: "im dummy",
  id: "1",
}];

const SideListProvider = (props) => {
  const [sideList, setSideList] = useState(DUMMY_ITEM);

  const addItemHandler = (newItem) => {
    console.log("im in sideList Provider");
    setSideList([
     ...sideList ,
      {
        label: newItem.label,
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

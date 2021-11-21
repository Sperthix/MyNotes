import React from "react";

const DUMMY_ITEM = {
  label: "im dummy",
  id: "1",
};

const SideListContext = React.createContext({
  list: [DUMMY_ITEM],
  addItem: (item) => {},
  removeItem: (id) => {},
  submit: () => {},
});

export default SideListContext;

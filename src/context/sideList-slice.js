import { createSlice } from "@reduxjs/toolkit";

const sideListSlice = createSlice({
  name: "sideList",
  initialState: { list: [] },
  reducers: {
    addNewItem(state, action) {
      let newId;
      const generateNewID = () => {
        const newID = Math.floor(Math.random() * 5000);
        return newID;
      };

      const checkForValidID = (newID) => {
        for (let i = 0; i < state.list.length; i++) {
          if (newID === parseFloat(state.list[i].id)) {
            console.log(
              `ID conflict. New ID: ${newID} usedID: ${state.list[i].id}`
            );
            return false;
          }
        }
        //  console.log(`adding to the list, new ID: ${newID}`);
        return true;
      };

      const addToList = () => {
        newId = generateNewID();
        if (checkForValidID(newId)) {
          state.list = state.list.concat({
            label: action.payload.label,
            id: action.payload.id,
          });
        } else {
          addToList();
        }
      };
      addToList();
    },
    removeItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    clearList() {},
  },
});

export const sideListActions = sideListSlice.actions;

export default sideListSlice;

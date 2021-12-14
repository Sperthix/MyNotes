import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos-slice";
import sideListSlice from "./sideList-slice";

const store = configureStore({
  reducer: { todos: todoSlice.reducer, sideList: sideListSlice.reducer },
});

export default store;

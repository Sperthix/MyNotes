import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos-slice";
import sideListSlice from "./sideList-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    sideList: sideListSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos-slice";
import sideListSlice from "./sideList-slice";
import authSlice from "./auth-slice";
import userDetailsSlice from "./userDetail-slice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    sideList: sideListSlice.reducer,
    auth: authSlice.reducer,
    userDetails: userDetailsSlice.reducer,
  },
});

export default store;

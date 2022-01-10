import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    details: { fullName: "", username: "", age: "", email: "", address: "" },
  },
  reducers: {
    setUserData(state, action) {
      state.details.fullName = action.payload.fullName;
      state.details.username = action.payload.username;
      state.details.age = action.payload.age;
      state.details.email = action.payload.email;
      state.details.address = action.payload.address;
    },
    clearUserData(state) {
      state.details.fullName = "";
      state.details.username = "";
      state.details.age = "";
      state.details.email = "";
      state.details.address = "";
    },
  },
});

export const userDetailsActions = userDetailsSlice.actions;

export default userDetailsSlice;

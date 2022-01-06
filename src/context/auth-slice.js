import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", uid: "", isLoggedIn: false },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
      console.log(action.payload);
      localStorage.setItem("uid", state.uid);
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("uid")
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

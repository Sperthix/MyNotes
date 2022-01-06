import { createSlice } from "@reduxjs/toolkit";

// calculate remaining time for auth token
const calculateRemainingTime = (expirationTime) => {
  console.log(expirationTime);

  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  console.log(remainingDuration);
  return remainingDuration;
};

// check for stored token
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedUid = localStorage.getItem("uid");
  const storedExpirationDate = localStorage.getItem("expiresAt");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("uid");
    return null;
  }

  return {
    token: storedToken,
    uid: storedUid,
    duration: remainingTime,
  };
};

const tokenData = retrieveStoredToken();
let initialToken;
let initialUid;
let duration;
let isLoggedIn = false;

if (tokenData) {
  initialToken = tokenData.token;
  initialUid = tokenData.uid;
  duration = tokenData.duration;
}

if (initialUid) {
  isLoggedIn = true;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken,
    uid: initialUid,
    loginDuration: duration,
    isLoggedIn: isLoggedIn,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
      localStorage.setItem("uid", state.uid);
      localStorage.setItem("token", state.token);
      localStorage.setItem("expiresAt", action.payload.loginDuration);
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("uid");
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

import { authActions } from "./auth-slice";

const API_KEY = process.env.REACT_APP_API_KEY;

let success = false;

export const sendSignUpRequest = (email, password) => {
  // returns an async function
  return async (dispatch) => {
    // this function is sending actual http request
    const sendSignUpRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: false,
          }),
        }
      );
      if (!response.ok) {
        success = false;
        const error = await response.json();
        throw new Error(error.error.message);
      }
      success = true;
      const data = await response.json();
      return data;
    };
    try {
      await sendSignUpRequest();
      console.log("User successfully created");
      return success;
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
};

export const sendLoginRequest = (email, password) => {
  // returns an async function
  return async (dispatch) => {
    // this function is sending actual http request
    const sendSignUpRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      if (!response.ok) {
        success = false;
        const error = await response.json();
        throw new Error(error.error.message);
      }
      success = true;
      const data = await response.json();
      return data;
    };
    try {
      const signInData = await sendSignUpRequest();
      const expirationTime = new Date(
        new Date().getTime() + +signInData.expiresIn * 1000
      );
      dispatch(
        authActions.login({
          token: signInData.idToken,
          uid: signInData.localId,
          loginDuration: expirationTime.toString(),
        })
      );
      return success;
    } catch (error) {
      alert(error.message);
    }
  };
};

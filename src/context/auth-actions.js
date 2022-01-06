import { authActions } from "./auth-slice";

const API_KEY = process.env.REACT_APP_API_KEY;

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
        const error = await response.json();
        throw new Error(error.error.message);
      }
      const data = await response.json();
      return data;
    };
    try {
      await sendSignUpRequest();
      console.log("User successfully created");
    } catch (error) {
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
        const error = await response.json();
        throw new Error(error.error.message);
      }
      const data = await response.json();
      return data;
    };
    try {
      const signInData = await sendSignUpRequest();
      dispatch(
        authActions.login({
          token: signInData.idToken,
          uid: signInData.localId,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
};

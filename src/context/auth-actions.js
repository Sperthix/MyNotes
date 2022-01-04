import { authActions } from "./auth-slice";

const API_KEY = "AIzaSyBzKwqKdqestLKOA9NrXnqCm_J502w3MyU";

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
        throw new Error(response.status);
      }
      const data = await response.json();
      return data;
    };
    try {
      await sendSignUpRequest();
      console.log('User successfully created')
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
        throw new Error(response.status);
      }
      const data = await response.json();
      return data;
    };
    try {
      const signUpData = await sendSignUpRequest();
      dispatch(
        authActions.login({
          token: signUpData.idToken,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
};

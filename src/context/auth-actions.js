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
        const error = await response.json();
        throw new Error(error.error.message);
      }

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
    } catch (error) {
      alert(error.message);
    }
  };
};

export const changePassword = (idToken, password) => {
  return async (dispatch) => {
    const sendChangePasswordRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken,
            password,
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
      await sendChangePasswordRequest().localId;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const changeEmail = (idToken, email) => {
  return async (dispatch) => {
    const sendChangeEmailRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken,
            email,
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
      await sendChangeEmailRequest().localId;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteUser = (idToken) => {
  return async (dispatch) => {
    const sendChangeEmailRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken,
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
      await sendChangeEmailRequest();
    } catch (error) {
      alert(error.message);
    }
  };
};

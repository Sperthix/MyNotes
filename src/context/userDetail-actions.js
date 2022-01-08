import { userDetailsActions } from "./userDetail-slice";

let uid = localStorage.getItem("uid");

export const getUserDetails = () => {
  return async (dispatch) => {
    const getData = async () => {
      uid = localStorage.getItem("uid");
      const response = await fetch(
        `https://multiapp-sperthix-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}/details.json`
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error.message);
      }
      const data = await response.json();
      return data;
    };
    try {
      const userDetailsData = await getData();
      dispatch(
        userDetailsActions.setUserData({
          fullNname: userDetailsData.name,
          username: userDetailsData.username,
          age: userDetailsData.age,
          email: userDetailsData.email,
          address: userDetailsData.address,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendUserDetails = (userDetails) => {
  return async () => {
    const sendData = async () => {
      uid = localStorage.getItem("uid");
      const response = await fetch(
        `https://multiapp-sperthix-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}/details.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            fullName: userDetails.name,
            username: userDetails.username,
            age: userDetails.age,
            email: userDetails.email,
            address: userDetails.address,
          }),
        }
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error.message);
      }
    };
    try {
      await sendData();
      console.log("Data sent successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

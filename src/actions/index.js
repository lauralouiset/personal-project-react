import token from "../constants/accesstoken";

// ACTION CREATORS

// ACTIONS FOR AUTHENTICATING USER OR SETTING ERROR

// action for login error
const logInError = () => ({ type: "LOG_IN_ERROR" });

// action for logging out
export const logOutUser = () => ({ type: "LOG_OUT_USER" });

// action for logging in
export const logInUser = username => {
  return async dispatch => {
    const response = await fetch(
      `https://api.github.com/users/${username}?access_token=${token}`
    );

    if (response.statusText === "OK") {
      const res = response.json();
      console.log(res);
      const userDetails = {
        name: res.name,
        location: res.location,
        avatar_url: res.avatar_url,
        followers: res.followers,
        following: res.following
      };
      console.log(userDetails);

      await dispatch({
        type: "LOG_IN_USER",
        payload: { username, userDetails }
      });
      console.log("User authenticated");
    } else {
      dispatch(logInError);
      console.log("Username not found");
    }
  };
};

// ACTION FOR GETTING EVENTS

export const fetchUserEvents = username => async dispatch => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events?access_token=${token}`
  ).then(res => res.json());

  dispatch({ type: "FETCH_USER_EVENTS", payload: response });
};

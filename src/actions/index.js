import token from "../constants/accesstoken";

// ACTION CREATORS

// HELPER FUNCTIONS FOR LOGGING IN
const checkStatus = response => {
  if (response.ok) {
    return true;
  } else {
    return false;
  }
};

const parseResponse = res => {
  const userDetails = {
    name: res.name,
    location: res.location,
    avatar_url: res.avatar_url,
    followers: res.followers,
    following: res.following
  };

  return userDetails;
};

// LOGGING IN & LOGIN ERROR
export const logInUser = username => {
  return async dispatch => {
    const response = await fetch(
      `https://api.github.com/users/${username}?access_token=${token}`
    );

    const logInSuccessful = await checkStatus(response);

    const userDetails = await response
      .json()
      .then(response => parseResponse(response))
      .catch(err => {
        console.log(err);
        dispatch({ type: "LOG_IN_ERROR" });
      });

    logInSuccessful
      ? dispatch({ type: "LOG_IN_USER", payload: { username, userDetails } })
      : dispatch({ type: "LOG_IN_ERROR" });
  };
};

//  LOGGING OUT
export const logOutUser = () => ({ type: "LOG_OUT_USER" });

// ACTION FOR GETTING EVENTS

export const fetchUserEvents = username => async dispatch => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events?access_token=${token}`
  ).then(res => res.json());

  dispatch({ type: "FETCH_USER_EVENTS", payload: response });
};

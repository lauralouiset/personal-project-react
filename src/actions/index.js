import token from "../constants/accesstoken";

// ACTION CREATORS

const logInError = () => ({ type: "LOG_IN_ERROR" });

// action for logging out
export const logOutUser = () => ({ type: "LOG_OUT_USER" });

// HELPER FUNCTIONS FOR LOGGING IN

// const checkStatus = (dispatch, response) => {
//   if (!response.ok) {
//     dispatch({ type: "LOG_IN_ERROR" });
//   } else {
//     const type = "LOG_USER_IN";
//     console.log(type);
//     return type;
//   }
// };

const parseResponse = res => {
  const userDetails = {
    name: res.name,
    location: res.location,
    avatar_url: res.avatar_url,
    followers: res.followers,
    following: res.following
  };

  // console.log(userDetails);
  return userDetails;
};

// action for logging in
export const logInUser = username => {
  return async dispatch => {
    const userDetails = await fetch(
      `https://api.github.com/users/${username}?access_token=${token}`
    )
      .then(res => res.json())
      .then(response => parseResponse(response));

    // await checkStatus(dispatch, response);

    // const userDetails = await parseResponse(response);

    dispatch({ type: "LOG_IN_USER", payload: { username, userDetails } });
  };
};

// ACTION FOR GETTING EVENTS

export const fetchUserEvents = username => async dispatch => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events?access_token=${token}`
  ).then(res => res.json());

  console.log(response);

  dispatch({ type: "FETCH_USER_EVENTS", payload: response });
};

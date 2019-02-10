// ACTION CREATORS

// need to set logged-in status, username, errorMessage if needs error handling
// need to set user events data for pulls and forks
//

// change logged-in status and update username
export const logIn = (isLoggedIn = true, username) => {
  return {
    type: "LOG_IN",
    payload: {
      username,
      isLoggedIn
    }
  };
};

// action for logging in

// action for logging out
export const logOut = (isLoggedIn = "false") => {
  return {
    type: "LOG_OUT",
    payload: { isLoggedIn }
  };
};

//
export const setUserDetails = () => {
  return {
    type: "SET_USER_DETAILS"
  };
};

// ACTION FOR GETTING EVENTS

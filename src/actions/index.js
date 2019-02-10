// ACTION CREATORS

// need to set logged-in status, username, errorMessage if needs error handling
// need to set user events data for pulls and forks
//

// change logged-in status and update username
export const changeLogInStatus = (newStatus = false, username = null) => {
  return {
    type: "CHANGE_LOGIN_STATUS",
    payload: {
      username,
      newStatus
    }
  };
};

//
export const setUserDetails = () => {
  return {
    type: "SET_USER_DETAILS"
  };
};

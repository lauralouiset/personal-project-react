import { combineReducers } from "redux";

const initialUserState = {
  isLoggedIn: false,
  username: "",
  logInError: false,
  userDetails: {}
};

// reducer for log in / log out

// const logOutUser = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOG_OUT":
//       return { ...state, isLoggedIn: false, username: "" };
//     default:
//       return state;
//   }
// };

const setUserLoginStatus = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return {
        ...state,
        isLoggedIn: true,
        logInError: false,
        username: action.payload.username,
        userDetails: action.payload.userDetails
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        isLoggedIn: false,
        logInError: false,
        username: "",
        userDetails: {}
      };
    case "LOG_IN_ERROR":
      return {
        ...state,
        isLoggedIn: false,
        logInError: true,
        username: "",
        userDetails: {}
      };

    default:
      return state;
  }
};

const userEvents = (userEvents = [], action) => {
  if (action.type === "FETCH_USER_EVENTS") {
    return action.payload;
  } else {
    return userEvents;
  }
};

const reducers = combineReducers({
  userStatus: setUserLoginStatus,
  userEvents: userEvents
});

export default reducers;

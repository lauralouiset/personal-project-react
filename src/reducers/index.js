import { combineReducers } from "redux";
import userEventsReducer from "./userEvents";

const initialUserState = {
  isLoggedIn: false,
  username: "",
  logInError: false,
  userDetails: {}
};

const UserLoginStatusReducer = (state = initialUserState, action) => {
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

const reducers = combineReducers({
  userStatus: UserLoginStatusReducer,
  userEvents: userEventsReducer
});

export default reducers;

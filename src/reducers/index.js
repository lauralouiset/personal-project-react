import { combineReducers } from "redux";

const initialState = {
  isLoggedIn: false,
  username: "",
  logInError: false,
  userDetails: {}
};

const initialEvents = [];

// reducer for log in / log out

// const logOutUser = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOG_OUT":
//       return { ...state, isLoggedIn: false, username: "" };
//     default:
//       return state;
//   }
// };

const setUserLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return {
        ...state,
        isLoggedIn: true,
        loginError: false,
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
    case "LOG_IN ERROR":
      return {
        ...state,
        isLoggedIn: false,
        loginError: true,
        username: "",
        userDetails: {}
      };

    default:
      return state;
  }
};

// const userEvents = (userEvents = initialEvents, action) => {
//   if ((action.type = "FETCH_USER_EVENTS")) {
//     return action.payload;
// 	}

//   return userEvents;
// };

// const selectedSongReducer = (selectedSong = null, action) => {
// 	if (action.type === "SONG_SELECTED") {
// 		return action.payload;
// 	}

// 	return selectedSong;
// };

const reducers = combineReducers({
  userLoginStatus: setUserLoginStatus
  // userEvents
});

export default reducers;

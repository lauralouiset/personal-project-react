// our reducers
import { combineReducers } from "redux";

const reducers = combineReducers({ dummyReducer: () => "replace me" });

export default reducers;

// reducer for log in / log out

// const logInReducer = (action) => {
// 	if(action.type === 'LOG_OUT'){
// return () => {}
// 	}
// }

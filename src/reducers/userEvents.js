const userEventsReducer = (userEvents = [], action) => {
  if (action.type === "FETCH_USER_EVENTS") {
    return action.payload;
  } else {
    return userEvents;
  }
};

export default userEventsReducer;

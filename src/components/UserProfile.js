import React from "react";

import UserDetails from "./UserDetails";
import UserEvents from "./UserEvents";

const UserProfile = ({ userDetails, username, isLoggedIn }) => {
  return (
    <div className="userProfile">
      <UserDetails userDetails={userDetails} isLoggedIn={isLoggedIn} />
      <UserEvents username={username} />
    </div>
  );
};

export default UserProfile;

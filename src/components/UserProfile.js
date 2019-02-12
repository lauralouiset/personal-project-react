import React from "react";

import UserDetails from "./UserDetails";
import UserEvents from "./UserEvents";

const UserProfile = ({ userDetails, username, handleLogOut }) => {
  return (
    <div className="userProfile">
      <UserDetails
        username={username}
        userDetails={userDetails}
        handleLogOut={handleLogOut}
      />
      <UserEvents />
    </div>
  );
};

export default UserProfile;

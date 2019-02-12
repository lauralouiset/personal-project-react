import React from "react";

import Button from "./Button";

const UserDetails = props => {
  const {
    name,
    location,
    avatar_url,
    followers,
    following
  } = props.userDetails;

  return (
    <div className="userDetails">
      <img className="avatar" src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>{props.username}</p>
      <p> Location: {location}</p>
      <p>Following: {following}</p>
      <p>Followers: {followers}</p>
      <Button handleClick={props.handleLogOut}>Log Out</Button>
    </div>
  );
};

export default UserDetails;

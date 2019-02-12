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

  const username = props.username;
  const userURL = `https://github.com/${username}`;

  return (
    <div className="userDetails bg-light">
      <img className="avatar" src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>
        <a href={userURL}>@{username}</a>
      </p>
      <p> Location: {location}</p>
      <p>Following: {following}</p>
      <p>Followers: {followers}</p>
      <Button
        className={"secondary"}
        value="Log Out"
        handleClick={props.handleLogOut}
      />
    </div>
  );
};

export default UserDetails;

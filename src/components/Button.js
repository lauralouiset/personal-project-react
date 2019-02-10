import React from "react";

const Button = props => {
  let buttonText;

  if (props.isLoggedIn) {
    buttonText = "Log Out";
  } else {
    buttonText = "Search";
  }

  return <button type="Submit">{buttonText}</button>;
};

export default Button;

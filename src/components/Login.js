import React from "react";

import Button from "./Button";

const Login = props => {
  return (
    <div>
      <label htmlFor="username">Enter Your Github Username</label>
      <input
        type="text"
        required
        name="username"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <Button handleClick={props.handleLogIn}>Log In</Button>
    </div>
  );
};

export default Login;

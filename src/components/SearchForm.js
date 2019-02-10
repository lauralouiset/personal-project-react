import React from "react";

import Button from "./Button";

const SearchForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="username">Enter Your Github Username</label>
      <input
        type="text"
        name="username"
        value={props.formValue}
        onChange={props.handleChange}
      />
      <Button isLoggedIn={props.isLoggedIn} />
    </form>
  );
};

export default SearchForm;

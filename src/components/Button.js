import React from "react";

const Button = ({ handleClick, className, value }) => (
  <button onClick={handleClick} className={className}>
    {value}
  </button>
);
export default Button;

import React from "react";
import "./Button.css";
const Button = ({ children, buttonClicked }) => {
  return <button className="ui-button my-2" onClick = {(e) => buttonClicked(e)}>{children}</button>;
};

export default Button;

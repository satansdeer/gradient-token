import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, label, disabled }) => (
  <button onClick={onClick} className={`Button ${disabled && "is-disabled"}`}>
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;

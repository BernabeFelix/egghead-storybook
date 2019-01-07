import React from "react";
import { string, oneOfType, arrayOf, node } from "prop-types";

const Button = ({ bg, children }) => (
  <button style={{ backgroundColor: bg }}> {children} </button>
);

Button.propTypes = {
  /** This is the background color of the button */
  bg: string.isRequired,
  children: oneOfType([node, arrayOf(node)])
};

Button.defaultProps = {
  children: null
};

export default Button;

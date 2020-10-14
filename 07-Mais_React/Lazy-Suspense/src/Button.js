import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.backgroundColor, width: `${props.width}px`, color: props.color }}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
    color: '#fff'
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default Button;

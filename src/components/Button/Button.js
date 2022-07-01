import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ item, handleClick, text }) {
  return (
    <div
      className="btn"
      onClick={() => handleClick(item)}
    >
      <h2>
        {text}
      </h2>
    </div>
  );
}

Button.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;

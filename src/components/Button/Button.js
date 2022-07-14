import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  active, toDo, text
}) {
  return (
    <div
      className={active ? 'btn active' : 'btn'}
      onClick={toDo}
    >
      <h2>
        {text}
      </h2>
    </div>
  );
}

Button.defaultProps = {
  active: false,
};

Button.propTypes = {
  active: PropTypes.bool,
  toDo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;

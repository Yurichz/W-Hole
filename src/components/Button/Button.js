import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  active, item, toDo, text
}) {
  const dispatch = useDispatch();
  return (
    <div
      className={active ? 'btn active' : 'btn'}
      onClick={item ? () => dispatch(toDo(item)) : () => toDo()}
    >
      <h2>
        {text}
      </h2>
    </div>
  );
}

Button.defaultProps = {
  active: false,
  item: false
};

Button.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.any,
  toDo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;

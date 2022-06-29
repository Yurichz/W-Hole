import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BaseContext from '../../context/BaseContext';
import './Button.css';

function Button({ item }) {
  const { addToBasket } = useContext(BaseContext);
  return (
    <div
      className="btn"
      onClick={() => addToBasket(item)}
    >
      <h2>
        Купити
      </h2>
    </div>
  );
}

Button.propTypes = {
  item: PropTypes.object.isRequired
};
export default Button;

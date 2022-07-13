import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BasketView from './BasketView';

function Basket({
  active, changeActive, dragOverHandler
}) {
  const [number, setNumber] = useState(0);

  const basketProducts = useSelector(({ basketItems }) => basketItems.basketProducts);

  const targetOnKeyDown = (e) => {
    if (active) {
      if (e.key === 'ArrowDown') {
        setNumber(number < basketProducts.length ? number + 1 : 0);
      }
      if (e.key === 'ArrowUp') {
        setNumber(number ? number - 1 : basketProducts.length);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', targetOnKeyDown, false);
    return () => {
      window.removeEventListener('keydown', targetOnKeyDown, false);
    };
  }, [targetOnKeyDown]);

  return (
    <BasketView
      active={active}
      changeActive={changeActive}
      basketProducts={basketProducts}
      dragOverHandler={dragOverHandler}
      number={number}
    />
  );
}

Basket.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired
};

export default Basket;

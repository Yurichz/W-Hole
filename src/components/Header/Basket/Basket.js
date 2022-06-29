import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BasketView from './BasketView';
import BaseContext from '../../../context/BaseContext';

function Basket({
  active, changeActive,
  dragStartHandler, dragOverHandler, dragDropHandler,
  currentCurrency, currentCurrencySign 
}) {
  const [number, setNumber] = useState(0);

  const { basketProducts } = useContext(BaseContext);

  console.log(active);

  const targetOnKeyDown = (e) => {
    console.log(active);
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
  }, []);

  return (
    <BasketView
      active={active}
      changeActive={changeActive}
      currentCurrency={currentCurrency}
      basketProducts={basketProducts}
      dragStartHandler={dragStartHandler}
      dragOverHandler={dragOverHandler}
      dragDropHandler={dragDropHandler}
      number={number}
      currentCurrencySign={currentCurrencySign}
    />
  );
}

Basket.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Basket;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

function Header({
  changeActiveMenu, changeActiveBasket, changeCurrentCurrency, basketLength 
}) {
  const [LengthAnim, setLengthAnim] = useState('basketLength');

  const [exchangeRates, setExchangeRates] = useState([]);

  const getExchangeRates = async () => {
    const response = await fetch('https://v6.exchangerate-api.com/v6/0ff8a5b28577d242b72ae57d/latest/USD');
    const data = await response.json();
    if (data.result === 'success') {
      setExchangeRates(data.conversion_rates);
    } else {
      console.log('Error load data!');
    }
  };

  useEffect(() => {
    getExchangeRates();
  }, []);

  useEffect(() => {
    setLengthAnim('basketLength anim');
    setTimeout(() => {
      return setLengthAnim('basketLength');
    }, 100);
  }, [basketLength]);

  return (
    <HeaderView
      changeActiveMenu={changeActiveMenu}
      changeActiveBasket={changeActiveBasket}
      basketLength={basketLength}
      basketLengthAnim={LengthAnim}
      changeCurrentCurrency={changeCurrentCurrency}
      exchangeRates={exchangeRates}
    />
  );
}

Header.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  changeCurrentCurrency: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired
};

export default Header;

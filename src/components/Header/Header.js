import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeRates } from '../../store/exchangeRates/actions';
import HeaderView from './HeaderView';

function Header({
  changeActiveMenu, changeActiveBasket, basketLength
}) {
  const [LengthAnim, setLengthAnim] = useState('basketLength');
  const [LoadingInfo, setLoadingInfo] = useState(false);
  const dispatch = useDispatch();
  const exchangeRates = useSelector(({ Rates }) => Rates.exchangeRates);

  const getExchangeRates = async () => {
    setLoadingInfo(true);
    const response = await fetch('https://v6.exchangerate-api.com/v6/ff8a5b28577d242b72ae57d/latest/USD');
    const data = await response.json();
    if (data.result === 'success') {
      dispatch(setExchangeRates(data.conversion_rates));
      setLoadingInfo(false);
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
      exchangeRates={exchangeRates}
      getExchangeRates={getExchangeRates}
      LoadingInfo={LoadingInfo}
    />
  );
}

Header.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired
};

export default Header;

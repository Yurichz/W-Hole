import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRates } from '../../store/exchangeRates/actions';
import HeaderView from './HeaderView';

function Header({
  changeActiveMenu, changeActiveBasket, basketLength
}) {
  const [LengthAnim, setLengthAnim] = useState('basketLength');
  const dispatch = useDispatch();
  const { exchangeRates, loadingInfo } = useSelector(({ Rates }) => Rates);

  useEffect(() => {
    dispatch(getExchangeRates());
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
      loadingInfo={loadingInfo}
    />
  );
}

Header.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired
};

export default Header;

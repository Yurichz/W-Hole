import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setCurrentExchange } from '../../store/exchangeRates/actions';
import '../../i18n';
import Button from '../Button/Button';
import SiteLogo from './Logo.svg';
import Basket from './Basket.png';
import { ReactComponent as BurgerButton } from './BurgerButton.svg';
import './Header.css';

function HeaderView({
  changeActiveMenu, changeActiveBasket, getExchangeRates,
  basketLength, basketLengthAnim, exchangeRates, LoadingInfo
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation('', { keyPrefix: 'refreshRates' });
  return (
    <header>
      <div
        className="burger-btn"
        onClick={() => changeActiveMenu()}
      >
        <BurgerButton alt="Burger_Button" className="BurgerImage" />
      </div>
      <Link to="/" className="LogoAndName">
        <img src={SiteLogo} alt="Logo_W-Hole" />
        <p>W-Hole</p>
      </Link>
      <div className="BasketName">
        <div className="ButtonToRefreshRates">
          <Button
            toDo={getExchangeRates}
            text={t(LoadingInfo)}
          />
        </div>
        <select
          className="changeCurrentCurrency"
          onChange={(e) => {
            dispatch(setCurrentExchange(e.target.value, exchangeRates[e.target.value]));
          }}
        >
          {Object.keys(exchangeRates).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <div
          className="BasketButton"
          onClick={() => changeActiveBasket()}
        >
          <img src={Basket} alt="Basket_Icon" className="BasketIcon" />
          <div className={basketLengthAnim}>
            <h3>{basketLength}</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderView.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired,
  basketLengthAnim: PropTypes.string.isRequired,
  exchangeRates: PropTypes.any.isRequired,
  getExchangeRates: PropTypes.func.isRequired,
  LoadingInfo: PropTypes.string.isRequired
};

export default HeaderView;

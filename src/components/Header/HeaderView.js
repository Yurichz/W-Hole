import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SiteLogo from './Logo.svg';
import Basket from './Basket.png';
import { ReactComponent as BurgerButton } from './BurgerButton.svg';
import './Header.css';

function HeaderView({
  changeActiveMenu, changeActiveBasket, changeCurrentCurrency,
  basketLength, basketLengthAnim, exchangeRates 
}) {
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
        <select
          className="changeCurrentCurrency"
          onChange={(e) => {
            changeCurrentCurrency(e.target.value, exchangeRates[e.target.value]);
          }}
        >
          {Object.keys(exchangeRates).map((key) => {
            return (
              <option key={key} value={key}>{key}</option>
            );
          })}
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
  changeCurrentCurrency: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired,
  basketLengthAnim: PropTypes.string.isRequired,
  exchangeRates: PropTypes.object.isRequired
};

export default HeaderView;

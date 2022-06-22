import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteLogo from './Logo.svg';
import Basket from './Basket.png';
import { ReactComponent as BurgerButton } from './BurgerButton.svg';
import './Header.css';

class HeaderView extends Component {
  render() {
    const {
      changeActiveMenu, changeActiveBasket, changeCurrentCurrency,
      basketLength, basketLengthAnim, exchangeRates 
    } = this.props;
    return (
      <header>
        <div
          className="burger-btn"
          onClick={() => changeActiveMenu()}
        >
          <BurgerButton alt="Burger_Button" className="BurgerImage" />
        </div>
        <div className="LogoAndName">
          <a className="logo" href="/src/pages">
            <img src={SiteLogo} alt="Logo_W-Hole" />
          </a>
          <a className="SiteName" href="/src/pages">W-Hole</a>
        </div>
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

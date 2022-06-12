import React, { Component } from 'react';
import './ShopItemCase.css';
import PropTypes from 'prop-types';

class ShopItemCase extends Component {
  render() {
    const {
      addToBasket, element, currentCurrency, currentCurrencySign 
    } = this.props;
    return (
      <div className="shopItemCase">
        <div className="shopItemInfo">
          <a href="/">
            <div>
              <img className="shopItem-images" src={element.Image} alt={element.Details.Alt} />
            </div>
            <div className="shopItem-text">
              <h2>{element.Name}</h2>
              <h3>
                {`${(element.Price * currentCurrency).toFixed(2)}
              ${currentCurrencySign}`}
              </h3>
            </div>
          </a>
        </div>
        <div
          className="btn"
          onClick={() => addToBasket(element)}
        >
          <h2>
            Купити
          </h2>
        </div>
      </div>
    );
  }
}

ShopItemCase.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  element: PropTypes.object.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopItemCase;

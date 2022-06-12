import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopItemCase from './ShopItemCase';

class ShopItemsList extends Component {
  render() {
    const {
      addToBasket, shopElements, currentCurrency, currentCurrencySign 
    } = this.props;
    return (
      <>
        {shopElements.map((element) => {
          return (
            <div key={element.Details.Id}>
              <ShopItemCase
                element={element}
                addToBasket={addToBasket}
                currentCurrency={currentCurrency}
                currentCurrencySign={currentCurrencySign}
              />
            </div>
          );
        })}
      </>
    );
  }
}

ShopItemsList.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  shopElements: PropTypes.array.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopItemsList;

import React from 'react';
import PropTypes from 'prop-types';
import ShopItemCase from './ShopItemCase';

function ShopItemsList({ shopElements, currentCurrency, currentCurrencySign }) {
  return (
    <>
      {shopElements.map((element) => {
        return (
          <div key={element.Details.Id}>
            <ShopItemCase
              element={element}
              currentCurrency={currentCurrency}
              currentCurrencySign={currentCurrencySign}
            />
          </div>
        );
      })}
    </>
  );
}

ShopItemsList.propTypes = {
  shopElements: PropTypes.array.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopItemsList;

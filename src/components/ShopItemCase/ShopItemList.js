import React from 'react';
import PropTypes from 'prop-types';
import ShopItemCase from './ShopItemCase';

function ShopItemsList({ shopElements }) {
  return (
    <>
      {shopElements.map((element) => (
        <div key={element.Details.Id}>
          <ShopItemCase
            element={element}
          />
        </div>
      ))}
    </>
  );
}

ShopItemsList.propTypes = {
  shopElements: PropTypes.array.isRequired
};

export default ShopItemsList;

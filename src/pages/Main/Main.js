import React from 'react';
import PropTypes from 'prop-types';
import FirstContainerContent from './FirstContainerContent/FirstContainerContent';
import SecondContainerContent from './SecondContainerContent/SecondContainerContent';
import BestSellers from './Best-sellers/Best-sellers';
import ShopContent from './ShopContent/ShopContent';
import './Main.css';

function Main({ currentCurrency, currentCurrencySign }) {
  return (
    <div className="main">
      <FirstContainerContent />
      <SecondContainerContent />
      <BestSellers
        currentCurrency={currentCurrency}
        currentCurrencySign={currentCurrencySign}
      />
      <ShopContent
        currentCurrency={currentCurrency}
        currentCurrencySign={currentCurrencySign}
      />
    </div>
  );
}

Main.propTypes = {
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';
import FirstContainerContent from './FirstContainerContent/FirstContainerContent';
import SecondContainerContent from './SecondContainerContent/SecondContainerContent';
import BestSellers from './Best-sellers/Best-sellers';
import ShopContent from './ShopContent/ShopContent';
import './Main.css';

class Main extends React.Component {
  render() {
    const { addToBasket, currentCurrency, currentCurrencySign } = this.props;
    return (
      <div className="main">
        <FirstContainerContent />
        <SecondContainerContent />
        <BestSellers
          addToBasket={addToBasket}
          currentCurrency={currentCurrency}
          currentCurrencySign={currentCurrencySign}
        />
        <ShopContent
          addToBasket={addToBasket}
          currentCurrency={currentCurrency}
          currentCurrencySign={currentCurrencySign}
        />
      </div>
    );
  }
}

Main.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Main;

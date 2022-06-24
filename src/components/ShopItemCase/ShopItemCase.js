import React, { Component } from 'react';
import './ShopItemCase.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import BaseContext from '../../context/BaseContext';

class ShopItemCase extends Component {
  handleClick = () => {
    const Context = this.context;
    const { element } = this.props;
    Context.setCurrentProduct(element);
  };

  render() {
    const {
      element, currentCurrency, currentCurrencySign
    } = this.props;
    return (
      <div
        className="shopItemCase"
        onClick={this.handleClick}
      >
        <Link to={`/product/${element.Name}`}>
          <div className="shopItemInfo">
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
          </div>
        </Link>
        <Button item={element} />
      </div>
    );
  }
}

ShopItemCase.contextType = BaseContext;

ShopItemCase.propTypes = {
  element: PropTypes.object.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
};

export default ShopItemCase;

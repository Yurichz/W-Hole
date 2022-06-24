import React, { Component } from 'react';
import './Basket.css';
import PropTypes from 'prop-types';
import withModal from '../../../HOC/withModal/withModal';
import BasketItemCase from './BasketItemCase';
import EmptyBasket from '../../../assets/EmptyBasket.svg';

class BasketView extends Component {
  render() {
    const {
      deleteFromBasket, basketProducts,
      dragStartHandler, dragOverHandler, dragDropHandler,
      number, currentCurrency, currentCurrencySign 
    } = this.props;
    return (
      <div
        className="BasketContent"
        onClick={(s) => s.stopPropagation()}
      >
        {basketProducts.length
          ? basketProducts.map((element, i = -1) => {
            i += 1;
            return (
              <BasketItemCase
                key={element.Details.Id}
                product={element}
                deleteFromBasket={deleteFromBasket}
                active={i === number}
                dragStartHandler={dragStartHandler}
                dragOverHandler={dragOverHandler}
                dragDropHandler={dragDropHandler}
                currentCurrency={currentCurrency}
                currentCurrencySign={currentCurrencySign}
              />
            );
          })
          : (
            <div className="EmptyBasket">
              <img src={EmptyBasket} alt="EmptyBasket" />
              <h1>У кошику нічного немає :(</h1>
            </div>
          )}
      </div>
    );
  }
}

BasketView.propTypes = {
  deleteFromBasket: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default withModal(BasketView);
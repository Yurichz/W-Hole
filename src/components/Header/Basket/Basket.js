import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasketView from './BasketView';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.targetOnKeyDown, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.targetOnKeyDown, false);
  }

  targetOnKeyDown = (e) => {
    const { active, basketProducts } = this.props;
    if (active) {
      if (e.key === 'ArrowDown') {
        this.setState(({ number }) => ({
          number: number < basketProducts.length ? number + 1 : 0
        }));
      }
      if (e.key === 'ArrowUp') {
        this.setState(({ number }) => ({
          number: number ? number - 1 : basketProducts.length
        }));
      }
    }
  };

  render() {
    const { number } = this.state;
    const {
      active, changeActive, basketProducts, deleteFromBasket,
      dragStartHandler, dragOverHandler, dragDropHandler,
      currentCurrency, currentCurrencySign 
    } = this.props;
    return (
      <BasketView
        active={active}
        changeActive={changeActive}
        currentCurrency={currentCurrency}
        basketProducts={basketProducts}
        deleteFromBasket={deleteFromBasket}
        dragStartHandler={dragStartHandler}
        dragOverHandler={dragOverHandler}
        dragDropHandler={dragDropHandler}
        number={number}
        currentCurrencySign={currentCurrencySign}
      />
    );
  }
}

Basket.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  basketProducts: PropTypes.array.isRequired,
  deleteFromBasket: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Basket;

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
        this.setState((state) => {
          if (state.number < basketProducts.length) {
            return ({
              number: state.number + 1
            });
          }
          return ({
            number: 0
          });
        });
      }
      if (e.key === 'ArrowUp') {
        this.setState((state) => {
          if (state.number) {
            return ({
              number: state.number - 1
            });
          }
          return ({
            number: basketProducts.length
          });
        });
      }
    }
  };

  render() {
    const { number } = this.state;
    const {
      active, changeActiveBasket, basketProducts, deleteFromBasket,
      dragStartHandler, dragOverHandler, dragDropHandler,
      currentCurrency, currentCurrencySign 
    } = this.props;
    return (
      <BasketView
        active={active}
        changeActiveBasket={changeActiveBasket}
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
  changeActiveBasket: PropTypes.func.isRequired,
  basketProducts: PropTypes.array.isRequired,
  deleteFromBasket: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Basket;

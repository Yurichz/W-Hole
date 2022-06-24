import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasketView from './BasketView';
import BaseContext from '../../../context/BaseContext';

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
    const { active } = this.props;
    const Context = this.context;
    if (active) {
      if (e.key === 'ArrowDown') {
        this.setState(({ number }) => ({
          number: number < Context.basketProducts.length ? number + 1 : 0
        }));
      }
      if (e.key === 'ArrowUp') {
        this.setState(({ number }) => ({
          number: number ? number - 1 : Context.basketProducts.length
        }));
      }
    }
  };

  render() {
    const { number } = this.state;
    const {
      active, changeActive,
      dragStartHandler, dragOverHandler, dragDropHandler,
      currentCurrency, currentCurrencySign 
    } = this.props;
    const Context = this.context;
    return (
      <BasketView
        active={active}
        changeActive={changeActive}
        currentCurrency={currentCurrency}
        basketProducts={Context.basketProducts}
        deleteFromBasket={Context.deleteFromBasket}
        dragStartHandler={dragStartHandler}
        dragOverHandler={dragOverHandler}
        dragDropHandler={dragDropHandler}
        number={number}
        currentCurrencySign={currentCurrencySign}
      />
    );
  }
}

Basket.contextType = BaseContext;

Basket.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default Basket;

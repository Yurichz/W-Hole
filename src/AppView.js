import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';
import Basket from './pages/Header/Basket/Basket';
import Menu from './pages/Header/Menu/Menu';
import './App.css';

class AppView extends Component {
  render() {
    const {
      changeActiveMenu, changeActiveBasket, deleteFromBasket, basketLength,
      changeCurrentCurrency, addToBasket, currentCurrency, currentCurrencySign,
      activeBasket, basketProducts, dragStartHandler, dragOverHandler,
      dragDropHandler, activeMenu, items
    } = this.props;
    return (
      <>
        <Header
          changeActiveMenu={changeActiveMenu}
          changeActiveBasket={changeActiveBasket}
          deleteFromBasket={deleteFromBasket}
          basketLength={basketLength}
          changeCurrentCurrency={changeCurrentCurrency}
        />
        <Main
          addToBasket={addToBasket}
          currentCurrency={currentCurrency}
          currentCurrencySign={currentCurrencySign}
        />
        <Footer />
        <Basket
          active={activeBasket}
          changeActiveBasket={changeActiveBasket}
          currentCurrency={currentCurrency}
          basketProducts={basketProducts}
          deleteFromBasket={deleteFromBasket}
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dragDropHandler={dragDropHandler}
          currentCurrencySign={currentCurrencySign}
        />
        <Menu
          active={activeMenu}
          changeActiveMenu={changeActiveMenu}
          headName="Меню сайта"
          items={items}
        />
      </>
    );
  }
}

AppView.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  deleteFromBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired,
  changeCurrentCurrency: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
  activeBasket: PropTypes.bool.isRequired,
  basketProducts: PropTypes.array.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  activeMenu: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

export default AppView;

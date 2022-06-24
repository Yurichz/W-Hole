/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Basket from './components/Header/Basket/Basket';
import Menu from './components/Header/Menu/Menu';
import ProductPage from './pages/Product/ProductPage';
import './App.css';

class AppView extends Component {
  render() {
    const {
      changeActiveMenu, changeActiveBasket, basketLength,
      changeCurrentCurrency, currentCurrency, currentCurrencySign,
      activeBasket, dragStartHandler, dragOverHandler,
      dragDropHandler, activeMenu, items, currentProduct
    } = this.props;
    return (
      <Router>
        <Header
          changeActiveMenu={changeActiveMenu}
          changeActiveBasket={changeActiveBasket}
          basketLength={basketLength}
          changeCurrentCurrency={changeCurrentCurrency}
        />
        <Routes>
          <Route
            path="/product/:title"
            element={
              <ProductPage
                currentProduct={currentProduct}
                currentCurrency={currentCurrency}
                currentCurrencySign={currentCurrencySign}
              />
            }
          />
          <Route
            path="*"
            element={
              <Main
                currentCurrency={currentCurrency}
                currentCurrencySign={currentCurrencySign}
              />
                }
          />
        </Routes>
        <Footer />
        <Basket
          active={activeBasket}
          changeActive={changeActiveBasket}
          currentCurrency={currentCurrency}
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dragDropHandler={dragDropHandler}
          currentCurrencySign={currentCurrencySign}
        />
        <Menu
          active={activeMenu}
          changeActive={changeActiveMenu}
          headName="Меню сайта"
          items={items}
        />
      </Router>
    );
  }
}

AppView.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired,
  changeCurrentCurrency: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
  activeBasket: PropTypes.bool.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  activeMenu: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  currentProduct: PropTypes.object.isRequired
};

export default AppView;

/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Basket from './components/Header/Basket/Basket';
import Menu from './components/Header/Menu/Menu';
import ProductPage from './pages/Product/ProductPage';
import './App.css';

function AppView({
  changeActiveMenu, changeActiveBasket, basketLength,
  activeBasket, dragOverHandler, activeMenu, items
}) {
  const { t } = useTranslation();
  return (
    <Router>
      <Header
        changeActiveMenu={changeActiveMenu}
        changeActiveBasket={changeActiveBasket}
        basketLength={basketLength}
      />
      <Routes>
        <Route
          path="/product/:title"
          element={
            <ProductPage />
                    }
        />
        <Route
          path="*"
          element={
            <Main />
                    }
        />
      </Routes>
      <Footer />
      <Basket
        active={activeBasket}
        changeActive={changeActiveBasket}
        dragOverHandler={dragOverHandler}
      />
      <Menu
        active={activeMenu}
        changeActive={changeActiveMenu}
        headName={t('siteMenu')}
        items={items}
      />
    </Router>
  );
}

AppView.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired,
  activeBasket: PropTypes.bool.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  activeMenu: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

export default AppView;

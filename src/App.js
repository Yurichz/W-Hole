import React from 'react';
import AppView from './AppView';
import BaseContext from './context/BaseContext';

class App extends React.Component {
  items = [{ value: 'Головна', href: '/main' }, { value: 'Каталог', href: '/catalog' },
    { value: 'Про нас', href: '/aboutus' }];

  constructor() {
    super();
    this.state = {
      activeMenu: false,
      activeBasket: false,
      basketProducts: [],
      currentProduct: null,
      currentDragProduct: null,
      exchangeRates: null,
      currentCurrency: {
        currency: 'USD',
        sign: '$'
      }
    };
  }

  changeActiveMenu = () => {
    this.setState((state) => ({
      activeMenu: !state.activeMenu
    }));
  };

  changeActiveBasket = () => {
    this.setState((state) => ({
      activeBasket: !state.activeBasket
    }));
  };

  addToBasket = (Product) => {
    const { basketProducts } = this.state;
    const arrIds = basketProducts.map((elem) => elem.Details.Id);
    this.setState((state) => {
      if (!arrIds.includes(Product.Details.Id)) {
        return ({
          basketProducts: [...state.basketProducts, Product]
        });
      }
      return ({});
    });
  };

  deleteFromBasket = (Id) => {
    this.setState((state) => ({
      basketProducts: state.basketProducts.filter((item) => { return item.Details.Id !== Id; })
    }));
  };

  dragStartHandler = (e, product) => {
    this.setState({ currentDragProduct: product });
  };

  dragOverHandler = (e) => {
    e.preventDefault();
  };

  dragDropHandler = (e, product) => {
    e.preventDefault();
    this.setState((state) => {
      return {
        basketProducts: state.basketProducts.map((s) => {
          if (s.Details.Id === product.Details.Id) {
            return state.currentDragProduct;
          }
          if (s.Details.Id === state.currentDragProduct.Details.Id) {
            return product;
          }
          return s;
        })
      };
    });
  };

  changeCurrentCurrency = (e, exchangeRates) => {
    let temp;
    if (e === 'USD') {
      temp = '$';
    } else if (e === 'UAH') {
      temp = '₴';
    } else if (e === 'EUR') {
      temp = '€';
    } else {
      temp = e;
    }
    this.setState({
      currentCurrency: {
        currency: e,
        sign: temp
      },
      exchangeRates
    });
  };

  setCurrentProduct = (product) => {
    this.setState({ currentProduct: product });
  };

  render() {
    const {
      basketProducts, changeExchangeRates, exchangeRates, currentCurrency,
      activeBasket, activeMenu, currentProduct
    } = this.state;
    const { addToBasket, deleteFromBasket, setCurrentProduct } = this;
    return (
      <BaseContext.Provider value={{
        basketProducts, addToBasket, deleteFromBasket, setCurrentProduct 
      }}
      >
        <AppView
          changeActiveMenu={this.changeActiveMenu}
          changeActiveBasket={this.changeActiveBasket}
          basketLength={basketProducts.length}
          changeCurrentCurrency={this.changeCurrentCurrency}
          changeExchangeRates={changeExchangeRates}
          currentProduct={currentProduct}
          currentCurrency={exchangeRates ? +exchangeRates.toFixed(2) : 1}
          currentCurrencySign={currentCurrency.sign}
          activeBasket={activeBasket}
          dragStartHandler={this.dragStartHandler}
          dragOverHandler={this.dragOverHandler}
          dragDropHandler={this.dragDropHandler}
          activeMenu={activeMenu}
          headName="Меню сайта"
          items={this.items}
        />
      </BaseContext.Provider>
    );
  }
}

export default App;

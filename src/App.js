import React, { useMemo, useState } from 'react';
import AppView from './AppView';
import ProductContext from './context/ProductContext';

function App() {
  const items = useMemo(() => [{ value: 'Головна', href: '/main' }, { value: 'Каталог', href: '/catalog' },
    { value: 'Про нас', href: '/aboutus' }], []);

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentDragProduct, setCurrentDragProduct] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [currentCurrency, setCurrentCurrency] = useState({
    currency: 'USD',
    sign: '$'
  });

  const changeActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const changeActiveBasket = () => {
    setActiveBasket(!activeBasket);
  };

  const addToBasket = (Product) => {
    const arrIds = basketProducts.map((elem) => elem.Details.Id);
    if (!arrIds.includes(Product.Details.Id)) {
      setBasketProducts([...basketProducts, Product]);
    }
  };

  const deleteFromBasket = (Id) => {
    setBasketProducts(
      basketProducts.filter((item) => { return item.Details.Id !== Id; })
    );
  };

  const dragStartHandler = (e, product) => {
    setCurrentDragProduct(product);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragDropHandler = (e, product) => {
    e.preventDefault();
    setBasketProducts(() => {
      return basketProducts.map((s) => {
        if (s.Details.Id === product.Details.Id) {
          return currentDragProduct;
        }
        if (s.Details.Id === currentDragProduct.Details.Id) {
          return product;
        }
        return s;
      });
    });
  };

  const changeCurrentCurrency = (e, Rates) => {
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
    setCurrentCurrency({
      currency: e,
      sign: temp
    });
    setExchangeRates(Rates);
  };
  const changeCurrentProduct = (product) => {
    setCurrentProduct(product);
  };

  return (
    <ProductContext.Provider value={{
      basketProducts, currentProduct, addToBasket, deleteFromBasket, changeCurrentProduct
    }}
    >
      <AppView
        changeActiveMenu={changeActiveMenu}
        changeActiveBasket={changeActiveBasket}
        basketLength={basketProducts.length}
        changeCurrentCurrency={changeCurrentCurrency}
        currentCurrency={exchangeRates ? +exchangeRates.toFixed(2) : 1}
        currentCurrencySign={currentCurrency.sign}
        activeBasket={activeBasket}
        dragStartHandler={dragStartHandler}
        dragOverHandler={dragOverHandler}
        dragDropHandler={dragDropHandler}
        activeMenu={activeMenu}
        headName="Меню сайта"
        items={items}
      />
    </ProductContext.Provider>
  );
}

export default App;

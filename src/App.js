import React, { useMemo, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import AppView from './AppView';
import ProductContext from './context/ProductContext';
import './i18n/index';

function App() {
  const { t, i18n } = useTranslation();
  const items = useMemo(() => [{ value: t('main'), href: '/main' }, { value: t('catalogue'), href: '/catalog' },
    { value: t('aboutUs'), href: '/aboutus' }], [i18n.language]);

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);
  const basketProducts = useSelector(({ basketItems }) => basketItems.basketProducts);

  const changeActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const changeActiveBasket = () => {
    setActiveBasket(!activeBasket);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const changeCurrentProduct = (product) => {
    setCurrentProduct(product);
  };

  return (
    <Suspense fallback="Load">
      <ProductContext.Provider value={{
        currentProduct, changeCurrentProduct
      }}
      >
        <AppView
          changeActiveMenu={changeActiveMenu}
          changeActiveBasket={changeActiveBasket}
          basketLength={basketProducts.length}
          activeBasket={activeBasket}
          dragOverHandler={dragOverHandler}
          activeMenu={activeMenu}
          headName="Меню сайта"
          items={items}
        />
      </ProductContext.Provider>
    </Suspense>
  );
}

export default App;

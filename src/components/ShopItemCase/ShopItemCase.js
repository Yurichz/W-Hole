import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './ShopItemCase.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductContext from '../../context/ProductContext';
import ShopItemCaseView from './ShopItemCaseView';

function ShopItemCase({ element }) {
  const { changeCurrentProduct } = useContext(ProductContext);
  const { t } = useTranslation();
  const basketProducts = useSelector(({ basketItems }) => basketItems.basketProducts);
  const { currentExchange, currentCurrency } = useSelector(({ Rates }) => Rates);

  const handleClick = () => {
    changeCurrentProduct(element);
  };

  const isActive = () => {
    const arrIds = basketProducts.map((elem) => elem.Details.Id);
    return arrIds.includes(element.Details.Id);
  };

  const status = {
    active: isActive(),
    text: isActive() ? t('alreadyInBasket') : t('buy')
  };
  return (
    <ShopItemCaseView
      element={element}
      currentExchange={currentExchange}
      currentCurrency={currentCurrency.sign}
      handleClick={handleClick}
      status={status}
    />
  );
}

ShopItemCase.propTypes = {
  element: PropTypes.object.isRequired
};

export default ShopItemCase;

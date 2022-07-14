import React, { useContext, useMemo } from 'react';
import '../../i18n';
import './ShopItemCase.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ProductContext from '../../context/ProductContext';
import ShopItemCaseView from './ShopItemCaseView';

function ShopItemCase({ element }) {
  const { changeCurrentProduct } = useContext(ProductContext);
  const basketProducts = useSelector(({ basketItems }) => basketItems.basketProducts);
  const { currentExchange, currentCurrency } = useSelector(({ Rates }) => Rates);
  const dispatch = useDispatch();

  const handleClick = () => {
    changeCurrentProduct(element);
  };

  const isActive = useMemo(() => {
    const arrIds = basketProducts.map((elem) => elem.Details.Id);
    return arrIds.includes(element.Details.Id);
  }, [basketProducts]);

  return (
    <ShopItemCaseView
      element={element}
      currentExchange={currentExchange}
      currentCurrency={currentCurrency.sign}
      handleClick={handleClick}
      dispatch={dispatch}
      isActive={isActive}
    />
  );
}

ShopItemCase.propTypes = {
  element: PropTypes.object.isRequired
};

export default ShopItemCase;

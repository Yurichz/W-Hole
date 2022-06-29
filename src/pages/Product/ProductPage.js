import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Characteristics from './Characteristics/Characteristics';
import './ProductPage.css';
import BaseContext from '../../context/BaseContext';

function ProductPage({ currentCurrency, currentCurrencySign }) {
  const { currentProduct } = useContext(BaseContext);
  return (
    <div className="ProductPage">
      <div className="ProductContainer">
        <div className="ProductPageName">
          <h1>{currentProduct.Name}</h1>
        </div>
        <div className="ProductPageMainCase">
          <div className="ProductImage br">
            <img src={currentProduct.Image} alt={currentProduct.Name} />
          </div>
          <div className="ProductPageBuyMenu">
            <div className="ProductCost br">
              <h2>Ціна за одиницю:</h2>
              <h2>{`${(currentProduct.Price * currentCurrency).toFixed(2)} ${currentCurrencySign}`}</h2>
              <Button item={currentProduct} />
            </div>
            <div className="ProductPaymentMethods br">
              <div>
                <h3>Оплата</h3>
                <h4>Готівка,Безготівкова,VISA/Mastercard</h4>
              </div>
              <div className="ProductReturn">
                <h3>Обмін/Повернення</h3>
                <h4>Обмін/ повернення товару протягом 14 днів Гарантія: 36 місяців</h4>
              </div>
            </div>
          </div>
        </div>
        <Characteristics charInfo={currentProduct.Details.Characteristics} />
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ProductPage;

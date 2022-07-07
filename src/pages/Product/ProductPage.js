import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Characteristics from './Characteristics/Characteristics';
import './ProductPage.css';
import ProductContext from '../../context/ProductContext';

function ProductPage({ currentCurrency, currentCurrencySign }) {
  const { currentProduct, addToBasket } = useContext(ProductContext);
  const { t } = useTranslation();
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
              <h2>{t('pricePerUnit')}</h2>
              <h2>{`${(currentProduct.Price * currentCurrency).toFixed(2)} ${currentCurrencySign}`}</h2>
              <Button item={currentProduct} handleClick={addToBasket} text={t('buy')} />
            </div>
            <div className="ProductPaymentMethods br">
              <div>
                <h3>{t('payment')}</h3>
                <h4>{t('paymentMethods')}</h4>
              </div>
              <div className="ProductReturn">
                <h3>{t('exchange')}</h3>
                <h4>{t('exchangeMethods')}</h4>
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

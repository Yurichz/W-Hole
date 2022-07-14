import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../store/itemsInBasket/actions';
import '../../i18n';
import Button from '../../components/Button/Button';
import Characteristics from './Characteristics/Characteristics';
import './ProductPage.css';
import ProductContext from '../../context/ProductContext';

function ProductPage() {
  const { currentProduct } = useContext(ProductContext);
  const basketProducts = useSelector(({ basketItems }) => basketItems.basketProducts);
  const { currentExchange, currentCurrency } = useSelector(({ Rates }) => Rates);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isActive = () => {
    const arrIds = basketProducts.map((elem) => elem.Details.Id);
    return arrIds.includes(currentProduct.Details.Id);
  };

  const status = {
    active: isActive(),
    text: isActive() ? t('alreadyInBasket') : t('buy')
  };
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
              <h2>{`${(currentProduct.Price * currentExchange).toFixed(2)} ${currentCurrency.sign}`}</h2>
              <Button
                active={status.active}
                toDo={() => dispatch(addToBasket(currentProduct))}
                text={status.text}
              />
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

export default ProductPage;

import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import withModal from '../../../HOC/withModal/withModal';
import BasketItemCase from './BasketItemCase';
import EmptyBasket from '../../../assets/EmptyBasket.svg';

function BasketView({
  basketProducts, dragStartHandler, dragOverHandler,
  dragDropHandler, number, currentCurrency, currentCurrencySign
}) {
  const { t } = useTranslation();
  return (
    <div
      className="BasketContent"
      onClick={(s) => s.stopPropagation()}
    >
      {basketProducts.length
        ? basketProducts.map((element, i = -1) => (
          <BasketItemCase
            key={element.Details.Id}
            product={element}
            active={i + 1 === number}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dragDropHandler={dragDropHandler}
            currentCurrency={currentCurrency}
            currentCurrencySign={currentCurrencySign}
          />
        ))
        : (
          <div className="EmptyBasket">
            <img src={EmptyBasket} alt="EmptyBasket" />
            <h1>{t('emptyBasket')}</h1>
          </div>
        )}
    </div>
  );
}

BasketView.propTypes = {
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default withModal(BasketView);

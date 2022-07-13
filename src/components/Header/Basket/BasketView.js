import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import withModal from '../../../HOC/withModal/withModal';
import BasketItemCase from './BasketItemCase';
import EmptyBasket from '../../../assets/EmptyBasket.svg';

function BasketView({
  basketProducts, dragOverHandler, number
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
            dragOverHandler={dragOverHandler}
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
  dragOverHandler: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default withModal(BasketView);

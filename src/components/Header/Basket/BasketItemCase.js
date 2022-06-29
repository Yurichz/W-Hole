import React, { useContext } from 'react';
import './BasketItemCase.css';
import PropTypes from 'prop-types';
import BaseContext from '../../../context/BaseContext';

function BasketItemCase({
  product, active, dragStartHandler, dragOverHandler,
  dragDropHandler, currentCurrency, currentCurrencySign 
}) {
  const { deleteFromBasket } = useContext(BaseContext);
  return (
    <div
      className={(active) ? 'BasketProduct active' : 'BasketProduct'}
      onDragStart={(e) => dragStartHandler(e, product)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dragDropHandler(e, product)}
      draggable
    >
      <div className="BasketProductInfo">
        <div className="BasketProductBoxInfo">
          <img className="BasketProductImage" src={product.Image} alt={product.Details.Alt} />
          <h2>{product.Name}</h2>
        </div>
        <div className="BasketProductBoxInfo">
          <h2>{`${(product.Price * currentCurrency).toFixed(2)} ${currentCurrencySign}`}</h2>
          <div
            className="DeleteIconFromBasket"
            onClick={() => deleteFromBasket(product.Details.Id)}
          >
            <h3>X</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

BasketItemCase.propTypes = {
  product: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dragDropHandler: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default BasketItemCase;

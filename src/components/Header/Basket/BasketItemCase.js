import React from 'react';
import './BasketItemCase.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromBasket, setCurrentDragItem, changeSequenceBasket } from '../../../store/itemsInBasket/actions';

function BasketItemCase({
  product, active, dragOverHandler
}) {
  const dispatch = useDispatch();
  const { currentExchange, currentCurrency } = useSelector(({ Rates }) => Rates);
  return (
    <div
      className={(active) ? 'BasketProduct active' : 'BasketProduct'}
      onDragStart={(e) => dispatch(setCurrentDragItem(e, product))}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dispatch(changeSequenceBasket(e, product))}
      draggable
    >
      <div className="BasketProductInfo">
        <div className="BasketProductBoxInfo">
          <img className="BasketProductImage" src={product.Image} alt={product.Details.Alt} />
          <h2>{product.Name}</h2>
        </div>
        <div className="BasketProductBoxInfo">
          <h2>{`${(product.Price * currentExchange).toFixed(2)} ${currentCurrency.sign}`}</h2>
          <div
            className="DeleteIconFromBasket"
            onClick={() => dispatch(deleteFromBasket(product.Details.Id))}
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
  dragOverHandler: PropTypes.func.isRequired,
};

export default BasketItemCase;

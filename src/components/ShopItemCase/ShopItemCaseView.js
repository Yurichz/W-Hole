import React from 'react';
import '../../i18n';
import './ShopItemCase.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToBasket } from '../../store/itemsInBasket/actions';
import Button from '../Button/Button';

function ShopItemCaseView({
  element, currentExchange, currentCurrency, handleClick, status
}) {
  return (
    <div
      className="shopItemCase"
      onClick={handleClick}
    >
      <Link to={`/product/${element.Name}`}>
        <div className="shopItemInfo">
          <div>
            <img className="shopItem-images" src={element.Image} alt={element.Details.Alt} />
          </div>
          <div className="shopItem-text">
            <h2>{element.Name}</h2>
            <h3>
              {`${(element.Price * currentExchange).toFixed(2)}
              ${currentCurrency}`}
            </h3>
          </div>
        </div>
      </Link>
      <Button
        active={status.active}
        item={element}
        toDo={addToBasket}
        text={status.text}
      />
    </div>
  );
}

ShopItemCaseView.propTypes = {
  element: PropTypes.object.isRequired,
  currentExchange: PropTypes.number.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired
};

export default ShopItemCaseView;

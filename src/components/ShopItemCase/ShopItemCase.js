import React, { useContext } from 'react';
import './ShopItemCase.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ProductContext from '../../context/ProductContext';

function ShopItemCase({ element, currentCurrency, currentCurrencySign }) {
  const { changeCurrentProduct, addToBasket } = useContext(ProductContext);
  const handleClick = () => {
    changeCurrentProduct(element);
  };
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
              {`${(element.Price * currentCurrency).toFixed(2)}
              ${currentCurrencySign}`}
            </h3>
          </div>
        </div>
      </Link>
      <Button item={element} handleClick={addToBasket} text="Купити" />
    </div>
  );
}

ShopItemCase.propTypes = {
  element: PropTypes.object.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
};

export default ShopItemCase;

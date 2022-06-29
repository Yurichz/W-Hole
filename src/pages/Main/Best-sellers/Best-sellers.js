import React, { useEffect, useMemo } from 'react';
import './Best-sellers.css';
import AOS from 'aos';
import PropTypes from 'prop-types';
import ShopItemsList from '../../../components/ShopItemCase/ShopItemList';
import ShopItemsData from '../../../components/ShopItemCase/ShopItemData';
import 'aos/dist/aos.css';

function Bestsellers({ currentCurrency, currentCurrencySign }) {
  const ShopItems = useMemo(
    () => ShopItemsData.slice()
      .sort((a, b) => b.Details.Purchase - a.Details.Purchase)
      .slice(0, 4),
    ShopItemsData
  );
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="Best-sellers">
      <div className="Sellers-Name" data-aos="fade-up">
        <h1>ХОДОВИЙ ТОВАР</h1>
      </div>
      <div className="sellers-items-case">
        <div className="sellers-items" data-aos="fade-right">
          <ShopItemsList
            shopElements={ShopItems}
            currentCurrency={currentCurrency}
            currentCurrencySign={currentCurrencySign}
          />
        </div>
      </div>
    </div>
  );
}

Bestsellers.propTypes = {
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired,
};

export default Bestsellers;

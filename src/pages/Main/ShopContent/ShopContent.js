import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import ShopItemsDatas from '../../../components/ShopItemCase/ShopItemData';
import './ShopContent.css';
import 'aos/dist/aos.css';
import ShopContentView from './ShopContentView';

function ShopContent({ currentCurrency, currentCurrencySign }) {
  const [sortSelector, setSortSelector] = useState('byId');
  const [shopFilters, setShopFilters] = useState([]);
  const [shopItemsData, setShopItemsData] = useState(ShopItemsDatas.slice());

  const changeSortSelector = (sort) => {
    setSortSelector(sort);
  };

  const addOrRemoveToFilter = (filter) => {
    setShopFilters(() => {
      if (!shopFilters.includes(filter)) {
        return [...shopFilters, filter];
      }
      return shopFilters.filter((item) => item !== filter);
    });
  };

  const checkInFilter = (item) => {
    return shopFilters.some((e) => item.Details.Tags.includes(e));
  };

  const sortBySelectedMyMethod = () => {
    const tempArr = shopItemsData.slice();
    for (let i = 0; i < tempArr.length - 1; i++) {
      for (let j = 0; j < tempArr.length - (i + 1); j++) {
        if (tempArr[j].Price > tempArr[j + 1].Price) {
          [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
        }
      }
    }
    return tempArr;
  };

  const sortBySelectedWithMethodSort = () => {
    setShopItemsData(() => {
      if (sortSelector === 'byId') {
        return [...shopItemsData].sort((a, b) => a.Details.Id - b.Details.Id);
      }
      if (sortSelector === 'byPrice') {
        return sortBySelectedMyMethod();
      }
      return [...shopItemsData].sort((a, b) => b.Details.Purchase - a.Details.Purchase);
    });
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  useEffect(() => {
    sortBySelectedWithMethodSort();
  }, [sortSelector]);

  return (
    <ShopContentView
      changeSortSelector={changeSortSelector}
      addOrRemoveToFilter={addOrRemoveToFilter}
      shopFiltersLength={shopFilters.length}
      ShopItemsData={shopItemsData}
      checkInFilter={checkInFilter}
      currentCurrency={currentCurrency}
      currentCurrencySign={currentCurrencySign}
    />
  );
}

ShopContent.propTypes = {
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopContent;

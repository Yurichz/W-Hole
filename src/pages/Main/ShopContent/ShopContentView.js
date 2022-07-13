import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import PropTypes from 'prop-types';
import ShopItemsList from '../../../components/ShopItemCase/ShopItemList';
import './ShopContent.css';
import ShopFilterList from './ShopFilterList';
import 'aos/dist/aos.css';

function ShopContentView({
  changeSortSelector, addOrRemoveToFilter,
  shopFiltersLength, ShopItemsData, checkInFilter
}) {
  const { t } = useTranslation();
  return (
    <div className="shopContent">
      <div className="shopContentInfo">
        <h1>{t('stuff')}</h1>
        <select
          className="shopSortSelector"
          onChange={(e) => {
            changeSortSelector(e.target.value);
          }}
        >
          <option value="byId">{t('byId')}</option>
          <option value="byPrice">{t('byPriceIncreases')}</option>
          <option value="byPopular">{t('byPopular')}</option>
        </select>
      </div>
      <div className="shopItemsAndFilters">
        <ShopFilterList addOrRemoveToFilter={addOrRemoveToFilter} />
        <div className="shopItems" data-aos="fade-right">
          <ShopItemsList
            shopElements={shopFiltersLength
              ? ShopItemsData.filter((item) => checkInFilter(item))
              : ShopItemsData}
          />
        </div>
      </div>
    </div>
  );
}

ShopContentView.propTypes = {
  changeSortSelector: PropTypes.func.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired,
  shopFiltersLength: PropTypes.number.isRequired,
  ShopItemsData: PropTypes.array.isRequired,
  checkInFilter: PropTypes.func.isRequired,
};

export default ShopContentView;

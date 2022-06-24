import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopItemsList from '../../../components/ShopItemCase/ShopItemList';
import './ShopContent.css';
import ShopFilterList from './ShopFilterList';
import 'aos/dist/aos.css';

class ShopContentView extends Component {
  render() {
    const {
      changeSortSelector, addOrRemoveToFilter, shopFiltersLength, ShopItemsData,
      checkInFilter, currentCurrency, currentCurrencySign
    } = this.props;
    return (
      <div className="shopContent">
        <div className="shopContentInfo">
          <h1>Магазин товарів</h1>
          <select
            className="shopSortSelector"
            onChange={(e) => {
              changeSortSelector(e.target.value);
            }}
          >
            <option value="byId">По ІD</option>
            <option value="byPrice">По зростанню ціни</option>
            <option value="byPopular">Ходові</option>
          </select>
        </div>
        <div className="shopItemsAndFilters">
          <ShopFilterList addOrRemoveToFilter={addOrRemoveToFilter} />
          <div className="shopItems" data-aos="fade-right">
            <ShopItemsList
              shopElements={shopFiltersLength
                ? ShopItemsData.filter((item) => checkInFilter(item))
                : ShopItemsData}
              currentCurrency={currentCurrency}
              currentCurrencySign={currentCurrencySign}
            />
          </div>
        </div>
      </div>
    );
  }
}

ShopContentView.propTypes = {
  changeSortSelector: PropTypes.func.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired,
  shopFiltersLength: PropTypes.number.isRequired,
  ShopItemsData: PropTypes.array.isRequired,
  checkInFilter: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopContentView;

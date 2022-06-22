import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import ShopItemsDatas from '../../../components/ShopItemCase/ShopItemData';
import './ShopContent.css';
import 'aos/dist/aos.css';
import ShopContentView from './ShopContentView';

class ShopContent extends PureComponent {
  constructor() {
    super();
    this.state = {
      sortSelector: 'byId',
      shopFilters: [],
      ShopItemsData: ShopItemsDatas.slice()
    };
  }

  componentDidMount() {
    AOS.init({ duration: 800, once: true });
  }

  componentDidUpdate(prevProps, prevState,) {
    const { sortSelector } = this.state;
    if (prevState.sortSelector !== sortSelector) {
      this.sortBySelectedWithMethodSort();
    }
  }

  changeSortSelector = (sort) => {
    this.setState(() => ({
      sortSelector: sort
    }));
  };

  addOrRemoveToFilter = (filter) => {
    this.setState(({ shopFilters }) => {
      if (!shopFilters.includes(filter)) {
        return {
          shopFilters: [...shopFilters, filter]
        };
      }
      return {
        shopFilters: shopFilters.filter((item) => item !== filter)
      };
    });
  };

  checkInFilter = (item) => {
    const { shopFilters } = this.state;
    for (let i = 0; i < shopFilters.length; i++) {
      if (item.Details.Tags.includes(shopFilters[i])) {
        return true;
      }
    }
    return false;
  };

  sortBySelectedWithMethodSort = () => {
    this.setState(({ sortSelector, ShopItemsData }) => {
      if (sortSelector === 'byId') {
        return { ShopItemsData: [...ShopItemsData].sort((a, b) => a.Details.Id - b.Details.Id) };
      }
      if (sortSelector === 'byPrice') {
        return { ShopItemsData: this.sortBySelectedMyMethod() };
      }
      return { ShopItemsData: [...ShopItemsData].sort((a, b) => b.Details.Purchase - a.Details.Purchase) };
    });
  };

  sortBySelectedMyMethod = () => {
    const { ShopItemsData } = this.state;
    const tempArr = ShopItemsData.slice();
    for (let i = 0; i < tempArr.length - 1; i++) {
      for (let j = 0; j < tempArr.length - (i + 1); j++) {
        if (tempArr[j].Price > tempArr[j + 1].Price) {
          [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
        }
      }
    }
    return tempArr;
  };

  render() {
    const { shopFilters, ShopItemsData } = this.state;
    const { addToBasket, currentCurrency, currentCurrencySign } = this.props;
    return (
      <ShopContentView
        changeSortSelector={this.changeSortSelector}
        addOrRemoveToFilter={this.addOrRemoveToFilter}
        shopFiltersLength={shopFilters.length}
        ShopItemsData={ShopItemsData}
        checkInFilter={this.checkInFilter}
        addToBasket={addToBasket}
        currentCurrency={currentCurrency}
        currentCurrencySign={currentCurrencySign}
      />
    );
  }
}

ShopContent.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  currentCurrencySign: PropTypes.string.isRequired
};

export default ShopContent;

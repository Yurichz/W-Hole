import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopFilterCase from './ShopFilterCase';
import './ShopFilterList.css';

class ShopFilterList extends Component {
  filterList = ['MONITOR', 'GPU', 'CPU', 'MOUSE', 'HEADPHONES', 'RAM'];

  render() {
    const { addOrRemoveToFilter } = this.props;
    return (
      <div className="ShopFilterList">
        <h2 className="FilterText">Фільтри:</h2>
        <div className="FilterItems">
          {this.filterList.map((item) => {
            return (
              <ShopFilterCase
                key={item}
                filter={item}
                addOrRemoveToFilter={addOrRemoveToFilter}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ShopFilterList.propTypes = {
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterList;

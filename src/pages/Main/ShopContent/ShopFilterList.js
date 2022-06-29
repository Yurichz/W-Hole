import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ShopFilterCase from './ShopFilterCase';
import './ShopFilterList.css';

function ShopFilterList({ addOrRemoveToFilter }) {
  const filterList = useMemo(
    () => ['MONITOR', 'GPU', 'CPU', 'MOUSE', 'HEADPHONES', 'RAM'],
    []
  );
  return (
    <div className="ShopFilterList">
      <h2>Фільтри:</h2>
      <div className="FilterItems">
        {filterList.map((item) => {
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

ShopFilterList.propTypes = {
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterList;

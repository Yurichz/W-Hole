import React, { useState } from 'react';
import './ShopFilterCase.css';
import PropTypes from 'prop-types';

function ShopFilterCase({ addOrRemoveToFilter, filter }) {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={active ? 'FilterCase active' : 'FilterCase'}
      onClick={() => {
        addOrRemoveToFilter(filter);
        changeActive();
      }}
    >
      <h3>{filter}</h3>
    </div>
  );
}

ShopFilterCase.propTypes = {
  filter: PropTypes.string.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterCase;

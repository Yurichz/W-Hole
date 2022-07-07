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
        addOrRemoveToFilter(Object.keys(filter).toString());
        changeActive();
      }}
    >
      <h3>{Object.values(filter)}</h3>
    </div>
  );
}

ShopFilterCase.propTypes = {
  filter: PropTypes.object.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterCase;

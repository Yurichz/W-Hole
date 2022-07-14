import React, { useState } from 'react';
import './ShopFilterCase.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function ShopFilterCase({ addOrRemoveToFilter, filter }) {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  const { t } = useTranslation();

  return (
    <div
      className={active ? 'FilterCase active' : 'FilterCase'}
      onClick={() => {
        addOrRemoveToFilter(filter.key);
        changeActive();
      }}
    >
      <h3>{t(filter.text)}</h3>
    </div>
  );
}

ShopFilterCase.propTypes = {
  filter: PropTypes.object.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterCase;

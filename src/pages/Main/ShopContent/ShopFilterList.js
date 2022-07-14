import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import PropTypes from 'prop-types';
import ShopFilterCase from './ShopFilterCase';
import './ShopFilterList.css';

function ShopFilterList({ addOrRemoveToFilter }) {
  const { t } = useTranslation();
  const filterList = useMemo(
    () => [
      {
        key: 'MONITOR',
        text: 'filterList.monitor'
      },
      {
        key: 'GPU',
        text: 'filterList.gpu'
      },
      {
        key: 'CPU',
        text: 'filterList.cpu'
      },
      {
        key: 'MOUSE',
        text: 'filterList.mouse'
      },
      {
        key: 'HEADPHONES',
        text: 'filterList.headphones'
      },
      {
        key: 'RAM',
        text: 'filterList.ram'
      }],
    []
  );

  return (
    <div className="ShopFilterList">
      <h2>{t('filters')}</h2>
      <div className="FilterItems">
        {filterList.map((item) => (
          <ShopFilterCase
            key={item.key}
            filter={item}
            addOrRemoveToFilter={addOrRemoveToFilter}
          />
        ))}
      </div>
    </div>
  );
}

ShopFilterList.propTypes = {
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterList;

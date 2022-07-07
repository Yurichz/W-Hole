import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import PropTypes from 'prop-types';
import ShopFilterCase from './ShopFilterCase';
import './ShopFilterList.css';

function ShopFilterList({ addOrRemoveToFilter }) {
  const { t, i18n } = useTranslation();
  const filterList = useMemo(
    () => [
      {
        MONITOR: t('filterList.monitor')
      },
      {
        GPU: t('filterList.gpu')
      },
      {
        CPU: t('filterList.cpu')
      },
      {
        MOUSE: t('filterList.mouse')
      },
      {
        HEADPHONES: t('filterList.headphones')
      },
      {
        RAM: t('filterList.ram')
      }],
    [i18n.language]
  );
  return (
    <div className="ShopFilterList">
      <h2>{t('filters')}</h2>
      <div className="FilterItems">
        {filterList.map((item) => (
          <ShopFilterCase
            key={Object.keys(item).toString()}
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

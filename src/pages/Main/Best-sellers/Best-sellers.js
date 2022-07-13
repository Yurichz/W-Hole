import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import './Best-sellers.css';
import AOS from 'aos';
import ShopItemsList from '../../../components/ShopItemCase/ShopItemList';
import ShopItemsData from '../../../components/ShopItemCase/ShopItemData';
import 'aos/dist/aos.css';

function Bestsellers() {
  const ShopItems = useMemo(
    () => ShopItemsData.slice()
      .sort((a, b) => b.Details.Purchase - a.Details.Purchase)
      .slice(0, 4),
    ShopItemsData
  );
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="Best-sellers">
      <div className="Sellers-Name" data-aos="fade-up">
        <h1>{t('bestSellers')}</h1>
      </div>
      <div className="sellers-items-case">
        <div className="sellers-items" data-aos="fade-right">
          <ShopItemsList
            shopElements={ShopItems}
          />
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;

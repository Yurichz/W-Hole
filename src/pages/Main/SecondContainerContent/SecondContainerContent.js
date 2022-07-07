import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import './SecondContainerContent.css';

function SecondContainerContent() {
  const { t } = useTranslation();
  return (
    <div className="SecondContent">
      <div className="SiteInfo">
        <div className="H1Info">
          <h1>W-Hole</h1>
        </div>
        <div className="OtherInfo">
          <h3>{t('siteInfo.part1')}</h3>
          <h3>{t('siteInfo.part2')}</h3>
          <h3>{t('siteInfo.part3')}</h3>
        </div>
      </div>
    </div>
  );
}

export default SecondContainerContent;

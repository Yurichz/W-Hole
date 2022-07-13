import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="InfoContainer">
        <div className="Info">
          <div className="Links">
            <p className="f1">{t('myLinks')}</p>
            <ul>
              <li>
                <a href="https://github.com/Yurichz" className="MyLinks" target="_blank" rel="noreferrer">GITHUB</a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yurich_hz/"
                  className="MyLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  INST
                </a>
              </li>
            </ul>
          </div>
          <div className="Time">
            <p className="f1">{t('workingTime.part1')}</p>
            <ul>
              <li>
                <p className="f2">{t('workingTime.part2')}</p>
              </li>
              <li>
                <p className="f2">{t('workingTime.part3')}</p>
              </li>
            </ul>
          </div>
          <div className="TelNumber">
            <p className="f1">{t('phoneNumber')}</p>
            <p className="f2" id="number">0 800 000-000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

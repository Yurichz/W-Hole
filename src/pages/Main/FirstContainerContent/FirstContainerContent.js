import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import './FirstContainerContent.css';
import RTX from './RTX.png';
import Intel from './intel.png';
import RAM from './RAM.png';
import MBoard from './m-board.png';
import Frame from './frame.png';
import Power from './power-unit.png';
import Computer from './computer.png';

function FirstContainerContent() {
  const { t } = useTranslation();
  return (
    <div className="FirstContent">
      <div className="MessageContent">
        <div className="message">
          <h1>{t('internetShop')}</h1>
          <h2>{t('helpYou.part1')}</h2>
          <h2>{t('helpYou.part2')}</h2>
          <h3>{t('catalogue')}</h3>
          <ul className="CatalogGridButtons">
            <li className="Li-Images">
              <a href="/src/pages">
                <img className="prev_image" src={RTX} alt="RTX" />
              </a>
            </li>
            <li className="Li-Images">
              <a href="/src/pages">
                <img className="prev_image" src={Intel} alt="Intel" />
              </a>
            </li>
            <li className="Li-Images">
              <a href="/src/pages">
                <img className="prev_image" src={RAM} alt="RAM" />
              </a>
            </li>
            <li className="Li-Images2">
              <a href="/src/pages">
                <img className="prev_image" src={MBoard} alt="Board" />
              </a>
            </li>
            <li className="Li-Images2">
              <a href="/src/pages">
                <img className="prev_image" src={Frame} alt="frame" />
              </a>
            </li>
            <li className="Li-Images2">
              <a href="/src/pages">
                <img className="prev_image" src={Power} alt="power" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="PCImageCase">
        <img
          className="PCImage"
          src={Computer}
          alt="Gamer_PC"
          onLoad={() => console.log('Image computer.png is loaded')}
          onError={() => console.log('Error in image computer.png :(')}
        />
      </div>
    </div>
  );
}

export default FirstContainerContent;

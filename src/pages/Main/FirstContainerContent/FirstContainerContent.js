import React from 'react';
import './FirstContainerContent.css';
import RTX from './RTX.png';
import Intel from './intel.png';
import RAM from './RAM.png';
import MBoard from './m-board.png';
import Frame from './frame.png';
import Power from './power-unit.png';
import Computer from './computer.png';

class FirstContainerContent extends React.PureComponent {
  render() {
    return (
      <div className="FirstContent">
        <div className="MessageContent">
          <div className="message">
            <h1>ІНТЕРНЕТ-МАГАЗИН</h1>
            <h2>ЯКИЙ ДОПОМОЖЕ ТОБІ</h2>
            <h2>ПІДІБРАТИ ПК</h2>
            <h3>Каталог:</h3>
            <div className="img">
              <ul>
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
        </div>
        <div className="PCImage">
          <img
            src={Computer}
            alt="Gamer_PC"
            onLoad={() => console.log('Image computer.png is loaded')}
            onError={() => console.log('Error in image computer.png :(')}
          />
        </div>
      </div>
    );
  }
}

export default FirstContainerContent;

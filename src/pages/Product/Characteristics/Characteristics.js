import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Characteristics.css';

class Characteristics extends Component {
  render() {
    const { charInfo } = this.props;
    return (
      <div className="CharacteristicsCase">
        <h1>Характеристики</h1>
        <div className="Characteristics br">
          { charInfo.map((item) => {
            return (
              <div key={item[1]}>
                <h3>{item[0]}</h3>
                <h3>{item[1]}</h3>
              </div>
            ); 
          })}
        </div>
      </div>
    );
  }
}

Characteristics.propTypes = {
  charInfo: PropTypes.array.isRequired
};

export default Characteristics;

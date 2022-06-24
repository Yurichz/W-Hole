import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseContext from '../../context/BaseContext';
import './Button.css';

class Button extends Component {
  render() {
    const { item } = this.props;
    const Context = this.context;
    return (
      <div
        className="btn"
        onClick={() => Context.addToBasket(item)}
      >
        <h2>
          Купити
        </h2>
      </div>
    );
  }
}

Button.contextType = BaseContext;

Button.propTypes = {
  item: PropTypes.object.isRequired
};
export default Button;

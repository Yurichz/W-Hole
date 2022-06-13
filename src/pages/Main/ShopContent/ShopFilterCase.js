import React, { Component } from 'react';
import './ShopFilterCase.css';
import PropTypes from 'prop-types';

class ShopFilterCase extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  changeActive = () => {
    this.setState(({ active }) => ({
      active: !active
    }));
  };

  render() {
    const { active } = this.state;
    const { addOrRemoveToFilter, filter } = this.props;
    return (
      <div
        className={active ? 'FilterCase active' : 'FilterCase'}
        onClick={() => {
          addOrRemoveToFilter(filter);
          this.changeActive();
        }}
      >
        <h3>{filter}</h3>
      </div>
    );
  }
}

ShopFilterCase.propTypes = {
  filter: PropTypes.string.isRequired,
  addOrRemoveToFilter: PropTypes.func.isRequired
};

export default ShopFilterCase;

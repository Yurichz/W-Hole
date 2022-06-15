/* eslint-disable  react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './withModal.css';

export default function withModal(Component) {
  class MyModalHOC extends React.Component {
    render() {
      const { active, changeActive } = this.props;
      return (
        <div
          className={active ? 'Modal active' : 'Modal'}
          onClick={() => changeActive()}
        >
          <Component
            {...this.props}
          />
        </div>
      );
    }
  }
  MyModalHOC.propTypes = {
    active: PropTypes.bool.isRequired,
    changeActive: PropTypes.func.isRequired
  };
  return MyModalHOC;
}

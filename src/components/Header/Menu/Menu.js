import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render() {
    const {
      active, changeActive, headName, items
    } = this.props;
    return (
      <div
        className={active ? 'menu active' : 'menu'}
        onClick={() => changeActive()}
      >
        <div className="blur" />
        <div
          className="menuContent"
          onClick={(s) => s.stopPropagation()}
        >
          <div className="menuHeadName">
            <h1>
              {headName}
            </h1>
          </div>
          <div className="Items">
            {items.map((item) => {
              return (
                <div key={item.value} className="Item">
                  <h3>
                    <a href={item.href}>{item.value}</a>
                  </h3>
                </div>
              ); 
            })}
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  headName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Menu;

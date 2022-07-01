import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import PropTypes from 'prop-types';

function Menu({
  active, changeActive, headName, items 
}) {
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
          {items.map((item) => (
            <div key={item.value} className="Item">
              <h3>
                <Link to={item.href}>{item.value}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  headName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Menu;

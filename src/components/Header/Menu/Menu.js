import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import '../../../i18n';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Menu({
  active, changeActive, headName, items 
}) {
  const { i18n } = useTranslation();
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
        <div className="Language">
          <div className="LanguageItem" onClick={() => i18n.changeLanguage('ua')}>
            <h3>UA</h3>
          </div>
          <div className="LanguageItem" onClick={() => i18n.changeLanguage('en')}>
            <h3>ENG</h3>
          </div>
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

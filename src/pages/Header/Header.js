import React from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      basketLengthAnim: 'basketLength',
      exchangeRates: []
    };
  }

  componentDidMount() {
    this.getExchangeRates();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { basketLength } = this.props;
    if (nextState !== this.state || nextProps.basketLength !== basketLength) {
      if (nextProps.basketLength !== basketLength) {
        this.setState(() => {
          return { basketLengthAnim: 'basketLength anim' };
        });
        setTimeout(() => {
          return this.setState(() => {
            return { basketLengthAnim: 'basketLength' };
          }); 
        }, 100);
      }
      return true;
    } 
    return false;
  }

  getExchangeRates = async () => {
    const response = await fetch('https://v6.exchangerate-api.com/v6/0ff8a5b28577d242b72ae57d/latest/USD');
    const data = await response.json();
    if (data.result === 'success') {
      this.setState({ exchangeRates: data.conversion_rates });
    } else {
      console.log('Error load data!');
    }
  };

  render() {
    const { basketLengthAnim, exchangeRates } = this.state;
    const {
      changeActiveMenu, changeActiveBasket, changeCurrentCurrency, basketLength 
    } = this.props;
    return (
      <HeaderView
        changeActiveMenu={changeActiveMenu}
        changeActiveBasket={changeActiveBasket}
        basketLength={basketLength}
        basketLengthAnim={basketLengthAnim}
        changeCurrentCurrency={changeCurrentCurrency}
        exchangeRates={exchangeRates}
      />
    );
  }
}

Header.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  changeActiveBasket: PropTypes.func.isRequired,
  changeCurrentCurrency: PropTypes.func.isRequired,
  basketLength: PropTypes.number.isRequired
};

export default Header;

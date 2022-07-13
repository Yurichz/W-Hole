import { SET_EXCHANGE_RATES, SET_CURRENT_EXCHANGE } from './types';

const changeCurrentCurrency = (e) => {
  let temp;
  if (e === 'USD') {
    temp = '$';
  } else if (e === 'UAH') {
    temp = '₴';
  } else if (e === 'EUR') {
    temp = '€';
  } else {
    temp = e;
  }
  return {
    currency: e,
    sign: temp
  };
};

export const initialState = {
  exchangeRates: [],
  currentExchange: 1,
  currentCurrency: {
    currency: 'USD',
    sign: '$'
  }
};

export default function Rates(state = initialState, action) {
  switch (action.type) {
    case SET_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRates: action.Rates
      };
    case SET_CURRENT_EXCHANGE:
      return {
        ...state,
        currentExchange: action.currentExchange,
        currentCurrency: changeCurrentCurrency(action.e)
      };
    default:
      return state;
  }
}

import {
  SET_EXCHANGE_RATES,
  SET_CURRENT_EXCHANGE,
  SET_LOADING_INFO
} from './types';

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
  loadingInfo: 'refreshRates',
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
        exchangeRates: action.rates
      };
    case SET_CURRENT_EXCHANGE:
      return {
        ...state,
        currentExchange: action.currentExchange,
        currentCurrency: changeCurrentCurrency(action.e)
      };
    case SET_LOADING_INFO:
      return {
        ...state,
        loadingInfo: action.loadingInfo
      };
    default:
      return state;
  }
}

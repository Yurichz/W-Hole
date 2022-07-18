import {
  SET_EXCHANGE_RATES,
  SET_CURRENT_EXCHANGE,
  SET_LOADING_INFO
} from './types';

export const setExchangeRates = (rates) => ({ type: SET_EXCHANGE_RATES, rates });
export const setCurrentExchange = (e, currentExchange) => ({ type: SET_CURRENT_EXCHANGE, e, currentExchange });
export const setLoadingInfo = (loadingInfo) => ({ type: SET_LOADING_INFO, loadingInfo });

export const getExchangeRates = () => {
  return async (dispatch) => {
    dispatch(setLoadingInfo('loading'));
    const response = await fetch('https://v6.exchangerate-api.com/v6/0ff8a5b28577d242b72ae57d/latest/USD');
    const data = await response.json();
    if (data.result === 'success') {
      dispatch(setExchangeRates(data.conversion_rates));
      dispatch(setLoadingInfo('refreshRates'));
    } else {
      console.log('Error load data!');
      dispatch(setLoadingInfo('somethingWrong'));
    }
  };
};

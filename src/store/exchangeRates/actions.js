import { SET_EXCHANGE_RATES, SET_CURRENT_EXCHANGE } from './types';

export const setExchangeRates = (Rates) => ({ type: SET_EXCHANGE_RATES, Rates });
export const setCurrentExchange = (e, currentExchange) => ({ type: SET_CURRENT_EXCHANGE, e, currentExchange });

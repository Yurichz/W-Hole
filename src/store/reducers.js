import { combineReducers } from 'redux';
import basketItems from './itemsInBasket/reducers';
import Rates from './exchangeRates/reducers';

const rootReducer = combineReducers({
  basketItems,
  Rates
});

export default rootReducer;

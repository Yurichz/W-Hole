import {
  ADD_ITEM_TO_BASKET,
  DELETE_ITEM_FROM_BASKET,
  CHANGE_SEQUENCE_BASKET,
  SET_CURRENT_DRAG_ITEM
} from './types';

export const addToBasket = (item) => ({ type: ADD_ITEM_TO_BASKET, item });
export const deleteFromBasket = (Id) => ({ type: DELETE_ITEM_FROM_BASKET, Id });
export const changeSequenceBasket = (e, item) => ({ type: CHANGE_SEQUENCE_BASKET, e, item });
export const setCurrentDragItem = (e, item) => ({ type: SET_CURRENT_DRAG_ITEM, item });

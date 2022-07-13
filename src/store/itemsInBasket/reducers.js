import {
  ADD_ITEM_TO_BASKET,
  DELETE_ITEM_FROM_BASKET,
  CHANGE_SEQUENCE_BASKET,
  SET_CURRENT_DRAG_ITEM
} from './types';

const addToBasket = (basketProducts, item) => {
  const arrIds = basketProducts.map((elem) => elem.Details.Id);
  if (!arrIds.includes(item.Details.Id)) {
    localStorage.setItem('basketProducts', JSON.stringify([...basketProducts, item]));
    return [...basketProducts, item];
  }
  return basketProducts;
};

const deleteItemFromBasket = (basketProducts, Id) => {
  const newBasketProducts = basketProducts.filter((item) => item.Details.Id !== Id);
  localStorage.setItem('basketProducts', JSON.stringify(newBasketProducts));
  return newBasketProducts;
};

const dragDropHandler = (e, product, currentDragProduct, basketProducts) => {
  e.preventDefault();
  return basketProducts.map((s) => {
    if (s.Details.Id === product.Details.Id) {
      return currentDragProduct;
    }
    if (s.Details.Id === currentDragProduct.Details.Id) {
      return product;
    }
    return s;
  });
};

export const initialState = {
  basketProducts: JSON.parse(localStorage.getItem('basketProducts')) || [],
  currentDragProduct: null
};

export default function basketItems(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basketProducts: addToBasket(state.basketProducts, action.item)
      };
    case DELETE_ITEM_FROM_BASKET:
      return {
        ...state,
        basketProducts: deleteItemFromBasket(state.basketProducts, action.Id)
      };
    case CHANGE_SEQUENCE_BASKET:
      return {
        ...state,
        basketProducts: dragDropHandler(action.e, action.item, state.currentDragProduct, state.basketProducts)
      };
    case SET_CURRENT_DRAG_ITEM:
      return {
        ...state,
        currentDragProduct: action.item
      };
    default:
      return state;
  }
}

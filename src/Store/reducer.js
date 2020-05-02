import * as actionTypes from './actions';

const BASE_PRICE = 4;

const initialState = {
  ingredients: {
    onion: 0,
    tomato: 0,
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: BASE_PRICE
}

const INGREDIENT_PRICES = {
  onion: 0.25,
  tomato: 0.35,
  lettuce: 0.3,
  bacon: 1.25,
  cheese: 1,
  meat: 2.5,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
    default:
      return state;
  }
}

export default reducer;
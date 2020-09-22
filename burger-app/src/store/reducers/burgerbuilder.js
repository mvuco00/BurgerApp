import * as actionTypes from "../actions/actionTypes";
import { updateObjects } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  buyable: false,
  error: false,
  building: false,
};
const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  meat: 6,
  cheese: 3,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updatedIngredients = updateObjects(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        buyable: true,
        building: true,
      };
      return updateObjects(state, updatedState);
    case actionTypes.REMOVE_INGREDIENTS:
      const updatedIngr = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      };
      const updatedIngrd = updateObjects(state.ingredients, updatedIngr);
      const updatedSt = {
        ingredients: updatedIngrd,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        buyable: true,
        building: true,
      };
      return updateObjects(state, updatedSt);

    case actionTypes.SET_INGREDIENTS:
      return updateObjects(state, {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          meat: action.ingredients.meat,
          cheese: action.ingredients.cheese,
        },
        totalPrice: 4,
        error: false,
        building: false,
      });

    case actionTypes.FETCH_INGREDIENT_FAILED:
      return updateObjects(state, { error: true });
    default:
      return state;
  }
};

export default rootReducer;

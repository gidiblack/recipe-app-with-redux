import { IRecipeReducerAction, IState } from "../../types";
import * as types from "../actions/actionTypes";

// reducers are simply functions that accept the current state and an action and returns a new state clone
export default function recipeReducer(
  state: IState["recipes"] = [],
  action: IRecipeReducerAction
) {
  // switch statement that looks at the action type
  switch (action.type) {
    case types.CREATE_RECIPE_SUCCESS:
      // clone the existing state array using spread syntax, then add the recipe that was passed in on action.recipe
      return [...state, { ...action.recipes }]; // this returns an updated state array
    case types.UPDATE_RECIPE_SUCCESS:
      // map over state to find recipe with id that was changed then replace it in the new returned array without changing the array's order
      return state.map((recipe) =>
        recipe.id === action.recipe.id ? action.recipe : recipe
      );
    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;
    default:
      return state; // always better to have a default return of the initial state
  }
}

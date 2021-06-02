import { IRecipe, IRecipes } from "./../../types";
import * as types from "./actionTypes";
import * as recipeApi from "./../../api/recipeApi";
import { Dispatch } from "redux";

// Actions refer to events happening in the app. They are plain objects containing a description of the event
// actions are created by convenience functions called action creators (simple function that returns the action object)
export function createRecipe(recipe: IRecipe) {
  // action objects must have a "type" property followed by the payload
  return { type: types.CREATE_RECIPE, recipe };
  // second property recipe was shortened from "recipe: recipe" because the left and right side match
}

export function loadRecipesSuccess(recipes: IRecipes["recipes"]) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

// Using redux-thunk to handle async functions (API calls)
export function loadRecipes() {
  // every thunk returns a function that accepts "dispatch" as an argument
  // thunk middleware passes "dispatch" as an argument to our thunk for us
  return function (dispatch: Dispatch) {
    return recipeApi
      .getRecipes()
      .then((recipes) => {
        dispatch(loadRecipesSuccess(recipes));
      })
      .catch((error) => {
        throw error;
      });
  };
}

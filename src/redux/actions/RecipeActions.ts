import { IRecipe } from "./../../types";
import * as types from "./actionTypes";
import * as recipeApi from "./../../api/recipeApi";
import { Dispatch } from "redux";

// Actions refer to events happening in the app. They are plain objects containing a description of the event
// actions are created by convenience functions called action creators (simple function that returns the action object)
export function loadRecipesSuccess(recipes: IRecipe[]) {
  // action objects must have a "type" property followed by the payload
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
  // second property recipes was shortened from "recipes: recipes" because the left and right side match
}

export function createRecipeSuccess(recipe: IRecipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe };
}

export function updateRecipeSuccess(recipe: IRecipe) {
  return { type: types.UPDATE_RECIPE_SUCCESS, recipe };
}

// Using redux-thunk to handle async functions (API calls)
export function loadRecipes() {
  // every thunk returns a function that accepts "dispatch" as an argument
  // thunk middleware passes "dispatch" as an argument to our thunk for us
  return async function (dispatch: Dispatch) {
    try {
      const recipes: IRecipe[] = await recipeApi.getRecipes();
      dispatch(loadRecipesSuccess(recipes));
    } catch (error) {
      throw error;
    }
  };
}

export function saveRecipe(recipe: IRecipe) {
  return async function (dispatch: Dispatch) {
    try {
      const savedRecipe = await recipeApi.saveRecipe(recipe);
      recipe.id
        ? dispatch(updateRecipeSuccess(savedRecipe))
        : dispatch(createRecipeSuccess(savedRecipe));
    } catch (error) {
      throw error;
    }
  };
}

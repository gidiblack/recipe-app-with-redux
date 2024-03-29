import { IRecipe } from "./../../types";
import * as types from "./actionTypes";
import * as recipeApi from "./../../api/recipeApi";
import { Dispatch } from "redux";
import { beginApiCall, apiCallError } from "./apiStatusActions";

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

export function deleteRecipeOptimistic(recipe: IRecipe) {
  return { type: types.DELETE_RECIPE_OPTIMISTIC, recipe };
}

// Using redux-thunk to handle async functions (API calls)
export function loadRecipes() {
  // every thunk returns a function that accepts "dispatch" as an argument
  // thunk middleware passes "dispatch" as an argument to our thunk for us
  return async function (dispatch: Dispatch) {
    dispatch(beginApiCall()); // dispatch beginApiCall action before calling the api
    try {
      const recipes: IRecipe[] = await recipeApi.getRecipes();
      dispatch(loadRecipesSuccess(recipes));
    } catch (error) {
      dispatch(apiCallError(error)); // dispatch apiCallError when the fetch call returns an error
      throw error;
    }
  };
}

export function saveRecipe(recipe: IRecipe) {
  return async function (dispatch: Dispatch) {
    dispatch(beginApiCall()); // dispatch beginApiCall action before calling the api
    try {
      const savedRecipe = await recipeApi.saveRecipe(recipe);
      recipe.id
        ? dispatch(updateRecipeSuccess(savedRecipe))
        : dispatch(createRecipeSuccess(savedRecipe));
    } catch (error) {
      dispatch(apiCallError(error)); // dispatch apiCallError when the fetch call returns an error
      throw error; // throw the error to higher order functions in the stack
    }
  };
}

export function deleteRecipe(recipe: IRecipe) {
  return function (dispatch: Dispatch) {
    // doing optimistic delete, so we're not dispatching begin/end api call actions
    // or apiCallError action since we're not showing th loading status for this action
    dispatch(deleteRecipeOptimistic(recipe));
    return recipeApi.deleteRecipe(recipe.id);
  };
}

import { handleResponse, handleError } from "./apiUtils";
import { IRecipe } from "../types";
const baseUrl = "http://localhost:3001/recipeData/";

export function getRecipes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveRecipe(recipe: IRecipe) {
  return fetch(baseUrl + (recipe.id || ""), {
    method: recipe.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipe(recipeId: IRecipe["id"]) {
  return fetch(baseUrl + recipeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

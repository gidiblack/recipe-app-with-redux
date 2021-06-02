import { handleResponse, handleError } from "./apiUtils";
import { IRecipe } from "../types";
const baseUrl = "http://localhost:3001/recipeData/";

export async function getRecipes() {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function saveRecipe(recipe: IRecipe) {
  try {
    const response = await fetch(baseUrl + (recipe.id || ""), {
      method: recipe.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(recipe),
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteRecipe(recipeId: IRecipe["id"]) {
  try {
    const response = await fetch(baseUrl + recipeId, { method: "DELETE" });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export const CREATE_RECIPE = "CREATE_RECIPE";

export const LOAD_RECIPES_SUCCESS = "LOAD_RECIPES_SUCCESS";

export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";

export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";

export const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";

export const BEGIN_API_CALL = "BEGIN_API_CALL";

export const API_CALL_ERROR = "API_CALL_ERROR";

// Calling this _OPTIMISTIC instead of _SUCCESS because we're hiding the loading state and deleting the recipe from the UI before deleting on the server
export const DELETE_RECIPE_OPTIMISTIC = "DELETE_RECIPE_OPTIMISTIC";

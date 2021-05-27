// Actions refer to events happening in the app. They are plain objects containing a description of the event
// actions are created by convenience functions called action creators (simple function that returns the action object)
export function createRecipe(recipe: IRecipe) {
  // action objects must have a "type" property followed by the payload
  return { type: "CREATE_RECIPE", recipe };
  // second property recipe was shortened from "recipe: recipe" because the left and right side match
}

interface IRecipe {
  recipe: {
    id: number;
    title: string;
  };
}

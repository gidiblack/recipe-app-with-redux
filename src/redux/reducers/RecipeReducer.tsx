import * as types from "../actions/actionTypes";

interface IState {
  recipes: {
    title: string;
  };
}

interface IAction {
  type: string;
  recipes: {
    title: string;
  };
}
// reducers are simply functions that accept the current state and an action and returns a new state clone
export default function recipeReducer(state: IState[] = [], action: IAction) {
  // switch statement that looks at the action type
  switch (action.type) {
    case types.CREATE_RECIPE:
      // clone the existing state array using spread syntax, then add the recipe that was passed in on action.recipe
      return [...state, { ...action.recipes }]; // this returns an updated state array
    default:
      return state; // always better to have a defualt return of the initial state
  }
}

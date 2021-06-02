import { IAuthorReducerAction, IState } from "../../types";
import * as types from "../actions/actionTypes";

// reducers are simply functions that accept the current state and an action and returns a new state clone
export default function recipeReducer(
  state: IState["authors"] = [],
  action: IAuthorReducerAction
) {
  // switch statement that looks at the action type
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state; // always better to have a default return of the initial state
  }
}

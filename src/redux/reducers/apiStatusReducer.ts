import { IApiStatusReducerAction, IState } from "../../types";
import * as types from "./../actions/actionTypes";

// this helper function checks for whether the action type ends in success using the substring method
function actionTypeEndsInSuccess(type: string) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

// initialize calls in progess state to 0, then increment state when an API call begins
export default function apiCallStatusReducer(
  state: IState["apiCallsInProgress"] = 0,
  action: IApiStatusReducerAction
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    // decrement state by one if actionTypeEndsInSuccess returns true
    return state - 1;
  }
  return state; // return state as default
}

/*NOTE: each action may be handled by multiple reducers  */

import { IAuthors } from "./../../types";
import * as types from "./actionTypes";
import * as authorApi from "./../../api/authorApi";
import { Dispatch } from "redux";

export function loadAuthorsSuccess(authors: IAuthors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// Using redux-thunk to handle async functions (API calls)
export function loadAuthors() {
  // every thunk returns a function that accepts "dispatch" as an argument
  // thunk middleware passes "dispatch" as an argument to our thunk for us
  return async function (dispatch: Dispatch) {
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}

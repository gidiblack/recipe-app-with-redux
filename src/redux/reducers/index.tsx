import { combineReducers } from "redux";
import recipes from "./RecipeReducer"; // this named import doesn't match the named function in the referenced file because that file has a default export
import authors from "./AuthorReducer";

const rootReducer = combineReducers({
  recipes,
  authors,
});

export default rootReducer;

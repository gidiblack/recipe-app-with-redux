import { combineReducers } from "redux";
import recipes from "./RecipeReducer"; // this named import doesn't match the named function in the referenced file because that file has a default export

const rootReducer = combineReducers({
  recipes,
});

export default rootReducer;

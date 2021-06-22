// integration test on the redux store to test the interactions of our action creators, our reducer and our store

import { createStore } from "redux";
import rootReducer from "./reducers";
import * as recipeActions from "./actions/RecipeActions";

it("should handle creating recipes", () => {
  // arrange
  const store = createStore(rootReducer);
  const recipe = {
    id: 3,
    title: "clean",
    slug: "clean",
    authorId: 1,
    authorName: "testClean",
    category: "testcat",
  };

  // act
  const action = recipeActions.createRecipeSuccess(recipe);
  store.dispatch(action);

  // assert
  const createdRecipe = store.getState().recipes[0];
  expect(createdRecipe).toEqual(recipe);
});

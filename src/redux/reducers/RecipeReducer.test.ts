// Testing Reducers
import * as actions from "./../actions/RecipeActions";
import recipeReducer from "./RecipeReducer";

it("should add a recipe when passed CREATE_RECIPE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      id: 1,
      title: "A",
      slug: "a",
      authorId: 1,
      authorName: "testA",
      category: "testcat",
    },
    {
      id: 2,
      title: "B",
      slug: "b",
      authorId: 1,
      authorName: "testB",
      category: "testcat",
    },
  ];

  const newRecipe = {
    id: 3,
    title: "C",
    slug: "c",
    authorId: 1,
    authorName: "testC",
    category: "testcat",
  };

  const action = actions.createRecipeSuccess(newRecipe);

  // act
  const newState = recipeReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
});

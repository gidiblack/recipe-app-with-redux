// Testing Reducers
import { IRecipe } from "../../types";
import * as actions from "./../actions/RecipeActions";
import recipeReducer from "./RecipeReducer";

it("should add a recipe when passed CREATE_RECIPE_SUCCESS", () => {
  // arrange
  const initialState: IRecipe[] = [
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
  expect(newState[0].title).toEqual("A");
  expect(newState[2].title).toEqual("C");
});

it("should update a recipe when passed UPDATE_RECIPE_SUCCESS", () => {
  // arrange
  const initialState: IRecipe[] = [
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
    id: 2,
    title: "updated recipe",
    slug: "c",
    authorId: 1,
    authorName: "testC",
    category: "testcat",
  };

  const action = actions.updateRecipeSuccess(newRecipe);

  // act
  const newState = recipeReducer(initialState, action);
  const updatedRecipe = newState.find((a) => a.id === newRecipe.id);
  const untouchedRecipe = newState.find((a) => a.id === 1);

  // assert
  expect(newState.length).toEqual(2);
  expect(updatedRecipe.title).toEqual("updated recipe");
  expect(untouchedRecipe.title).toEqual("A");
});

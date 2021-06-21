import * as RecipeActions from "./RecipeActions";
import * as types from "./actionTypes";

describe("createRecipeSuccess", () => {
  it("should create a CREATE_RECIPE_SUCCESS action", () => {
    // arrange test
    const recipe = {
      id: 1,
      title: "Grilled fish sticks",
      slug: "grilled-fish-sticks",
      authorId: 1,
      category: "Fish",
      authorName: "test",
    };
    const expectedAction = {
      type: types.CREATE_RECIPE_SUCCESS,
      recipe,
    };

    // act
    const action = RecipeActions.createRecipeSuccess(recipe);

    //assert test
    expect(action).toEqual(expectedAction);
    // test confirms that when createRecipeSuccess is called we get the expected object shape back
  });
});

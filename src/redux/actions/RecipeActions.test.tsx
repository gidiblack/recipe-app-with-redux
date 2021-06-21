import * as RecipeActions from "./RecipeActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock"; // used to mock fetch calls
import configureMockStore from "redux-mock-store"; // used to create a mock redux store
import { recipeData } from "../../../utils/mockData";

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

// test async action
const middleware = [thunk]; // configureMockStore expects an array of middleware to be passed in
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  // run afterEach function after each test in block
  afterEach(() => {
    fetchMock.restore(); // initialise fetchMock for each test
  });

  describe("Load Recipes Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_RECIPES_SUCCESS when loading recipes", () => {
      // arrange - capture all fetch calls with fetchMock and return a body that contains an array of recipes
      fetchMock.mock("*", {
        body: recipeData,
        headers: { "content-type": "application/json" },
      });

      // declare actions expected to be fired from the thunk
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_RECIPES_SUCCESS, recipeData },
      ];
      // act - create mock redux store initialized to an empty array of recipes
      const store = mockStore({ recipeData: [] });

      // assert - dispatch loadRecipes action then  call getActions on mock store to return a list of actions that have occured
      return store.dispatch<any>(RecipeActions.loadRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

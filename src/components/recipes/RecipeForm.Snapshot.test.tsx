import React from "react";
import RecipeForm from "./RecipeForm";
import renderer from "react-test-renderer";
import { recipeData, authorData } from "./../../../utils/mockData";

it("sets submit button label to 'Saving...' when saving is true", () => {
  // call renderer to render the component. renderer returns a tree which is an object that represents the ouput of our component
  // jest.fn() adds an empty function to the test
  const tree = renderer.create(
    <RecipeForm
      recipe={recipeData[0]}
      authors={authorData}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
      errors
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label to 'Save' when saving is false", () => {
  // call renderer to render the component. renderer returns a tree which is an object that represents the ouput of our component
  // jest.fn() adds an empty function to the test
  const tree = renderer.create(
    <RecipeForm
      recipe={recipeData[1]}
      authors={authorData}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
      errors
    />
  );

  expect(tree).toMatchSnapshot();
});

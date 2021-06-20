import React from "react";
import RecipeForm from "./RecipeForm";
import renderer from "react-test-renderer";

function renderRecipeForm(args?: any) {
  // object to hold our default values
  const defaultProps = {
    authors: [],
    recipe: {},
    errors: {},
    saving: false,
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  // call renderer to render the component. renderer returns a tree which is an object that represents the ouput of our component
  return renderer.create(<RecipeForm {...props} />);
}

it("sets submit button label to 'Saving...' when saving is true", () => {
  // jest.fn() adds an empty function to the test
  // const tree = renderer.create(
  //   <RecipeForm
  //     recipe={recipeData[0]}
  //     authors={authorData}
  //     onSave={jest.fn()}
  //     onChange={jest.fn()}
  //     saving
  //     errors
  //   />
  // );

  const tree = renderRecipeForm({ saving: true });

  expect(tree).toMatchSnapshot();
});

it("sets submit button label to 'Save' when saving is false", () => {
  const tree = renderRecipeForm();

  expect(tree).toMatchSnapshot();
});

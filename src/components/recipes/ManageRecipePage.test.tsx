// Testing "connected" components (redux)
import React from "react";
import { configure, mount } from "enzyme";
import { ManageRecipes } from "./ManageRecipes";
import { authorData, recipeData, newRecipe } from "../../../utils/mockData";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() }); // configure configures the Adapter

// centralised factory function
function renderManageRecipes(args?: any) {
  const defaultProps = {
    authors: authorData,
    recipes: recipeData,
    history: {},
    saveRecipe: jest.fn(),
    loadAuthors: jest.fn(),
    loadRecipes: jest.fn(),
    recipe: newRecipe,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageRecipes {...props} />); // mount renders the component and its children in memory via JSDOM
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = renderManageRecipes(); // render component
  wrapper.find("form").simulate("submit"); // find the form html element and simulate a submit of an empty form
  const error = wrapper.find(".alert").first(); // submitting an empty form throws an error so we find the first error using the .alert class
  expect(error.text()).toBe("Title is required."); // assertion expects the text of the error to be "".
});

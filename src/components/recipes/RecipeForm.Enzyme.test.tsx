import React from "react";
import { configure, shallow } from "enzyme"; // shallow renders a single component
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import RecipeForm from "./RecipeForm";

configure({ adapter: new Adapter() }); // configure configures the Adapter

function renderRecipeForm(args?: any) {
  const defaultProps = {
    authors: [],
    recipe: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<RecipeForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderRecipeForm();
  expect(wrapper.find("form").length).toBe(1); // enzyme's find method accepts css selectors (e.g 'form', '.btn', '#id')
  expect(wrapper.find("h2").text()).toEqual("Add Recipe");
});

it("Labels save button as 'Save' when not saving", () => {
  const wrapper = renderRecipeForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it("Labels save button as 'Saving...' when saving", () => {
  const wrapper = renderRecipeForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import RecipeList from "./RecipeList";

afterEach(cleanup); // configure cleanup function to run after each test

function renderRecipeList(args?: any) {
  const defaultProps = {
    recipes: [],
    onDeleteClick: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<RecipeList {...props} />); // returns an object that represents the output of the component
}

it("Should render a category column in table", () => {
  const { getByText } = renderRecipeList();
  getByText("Category");
});

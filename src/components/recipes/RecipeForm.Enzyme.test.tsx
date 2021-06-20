import React from "react";
import { configure, shallow } from "enzyme"; // shallow renders a single component
import Adapter from "enzyme-adapter-react-16";
import RecipeForm from "./RecipeForm";

configure({ adapter: new Adapter() }); // configure configures the Adapter

function renderRecipeForm(args: any) {
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

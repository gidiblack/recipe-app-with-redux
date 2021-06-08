import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import { IState, ManageRecipesProps } from "../../types";
import * as RecipeActions from "../../redux/actions/RecipeActions";
import * as AuthorActions from "../../redux/actions/authorActions";
import RecipeForm from "./RecipeForm";

// empty recipe object
const newRecipe = {
  id: null,
  title: "",
  authorId: null,
  authorName: "",
  category: "",
  slug: "",
};

// destructuring props inline
const ManageRecipes: React.FC<ManageRecipesProps> = ({
  authors,
  recipes,
  loadAuthors,
  loadRecipes,
  saveRecipe,
  ...props // "...props" holds any undestructured properties
}) => {
  // use plain react state for data only a few components use (1-3 components, e.g form state)
  const [recipe, setNewRecipe] = useState(props.recipe);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (recipes.length === 0) {
      loadRecipes().catch((error: any) => {
        alert("Loading recipes failed " + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error: any) => {
        alert("Loading authors failed " + error);
      });
    }
  }, [authors.length, loadAuthors, loadRecipes, recipes.length]);

  // single change handler for all inputs
  function handleChange(e: any) {
    // destructure event argument - this avoids the event getting garbage collected so that its available within the nested setNewRecipe callback
    const { name, value } = e.target;
    // use the functional form of setState to set a new recipe, this way we can safely reference the previous state as we set a new state
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      // this is js computed property syntax which allows us to reference a property (in []) via a variable
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(e: any) {
    e.preventDefault();
    saveRecipe(recipe);
  }

  return (
    <RecipeForm
      authors={authors}
      errors={errors}
      recipe={recipe}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

function mapStateToProps(state: IState) {
  return {
    recipe: newRecipe, // initialise "recipe" as the empty object on props
    recipes: state.recipes,
    authors: state.authors,
  };
}

// if mapDispatchToProps is declared as an object instead of as a function, each property will automatically be bound(wrapped in call) to dispatch
const mapDispatchToProps = {
  loadRecipes: RecipeActions.loadRecipes,
  loadAuthors: AuthorActions.loadAuthors,
  saveRecipe: RecipeActions.saveRecipe,
};
// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);

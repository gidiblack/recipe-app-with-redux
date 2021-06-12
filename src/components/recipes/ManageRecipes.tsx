import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import { IRecipe, IState, ManageRecipesProps } from "../../types";
import * as RecipeActions from "../../redux/actions/RecipeActions";
import * as AuthorActions from "../../redux/actions/authorActions";
import RecipeForm from "./RecipeForm";
import { Redirect } from "react-router-dom"; // react-router redirect component
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

// empty initial recipe object
const newRecipe: IRecipe = {
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
  const [recipe, setNewRecipe] = useState({ ...props.recipe });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [redirectToRecipesPage, setRedirectToRecipesPage] = useState(false);

  useEffect(() => {
    if (recipes.length === 0) {
      loadRecipes().catch((error: any) => {
        alert("Loading recipes failed " + error);
      });
    } else {
      setNewRecipe({ ...props.recipe });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error: any) => {
        alert("Loading authors failed " + error);
      });
    }
  }, [authors.length, loadAuthors, loadRecipes, props.recipe, recipes.length]);

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

  function formIsValid() {
    const { title, authorId, category } = recipe;
    const errors: any = {};
    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.authorId = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(e: any) {
    e.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveRecipe(recipe)
      .then(() => {
        toast.success("Recipe saved");
        setRedirectToRecipesPage(true);
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    // check if authors and recipes arrays are empty to show spinner while fecthing relevant data
    <>
      {authors.length === 0 || recipes.length === 0 ? (
        <Spinner />
      ) : (
        <RecipeForm
          authors={authors}
          errors={errors}
          recipe={recipe}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
      )}
      {/* if redirect state is true, evaluate Redirect component to the specified endpoint */}
      {redirectToRecipesPage && <Redirect to="/recipes" />}
    </>
  );
};

function getRecipeBySlug(recipes: IRecipe[], slug: string) {
  return recipes.find((recipe) => recipe.slug === slug) || newRecipe;
}

// ownProps param lets us access the component's own props which we can use to read the URL data injected on props by React Router
function mapStateToProps(state: IState, ownProps: any) {
  const slug = ownProps.match.params.slug; // this works because the route for this component in App.tsx has a placeholder for slug
  const recipe =
    slug && state.recipes.length > 0
      ? getRecipeBySlug(state.recipes, slug)
      : newRecipe;
  return {
    recipe: recipe, // initialise "recipe" as the empty object on props
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

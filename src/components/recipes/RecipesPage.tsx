import React from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import * as RecipeActions from "../../redux/actions/RecipeActions";
import * as AuthorActions from "../../redux/actions/authorActions";
import RecipeList from "./RecipeList";
import { IRecipe, IRecipePageProps, IState } from "./../../types";
import { bindActionCreators, Dispatch } from "redux"; // helper funtion to wrap action creators in dispatch calls
import { Redirect } from "react-router-dom"; // react-router redirect component
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class RecipesPage extends React.Component<IRecipePageProps> {
  // declare redirect state initialised to false
  state = {
    redirectToAddRecipePage: false,
  };
  // run this code when the component first mounts
  componentDidMount() {
    const { recipes, authors, actions } = this.props;
    // check if recipes array is empty then populate the array with redux action call
    if (recipes.length === 0) {
      actions.loadRecipes().catch((error: any) => {
        alert("Loading recipes failed " + error);
      });
    }

    // check if authors array is empty then populate the array with redux action call
    if (authors.length === 0) {
      actions.loadAuthors().catch((error: any) => {
        alert("Loading authors failed " + error);
      });
    }
  }

  handleDeleteRecipe = async (recipe: IRecipe) => {
    toast.success("Recipe Deleted"); // immediately tell the user that the recipe has been deleted
    try {
      await this.props.actions.deleteRecipe(recipe);
    } catch (error: any) {
      // fire action to delete recipe then display an error toast if the api call fails
      toast.error(
        "Delete failed. " + error.message + " please refresh the page",
        { autoClose: false }
      );
    }
    // NOTE: this is the tradeoff that optimistic deletes offers - app feels fast but can't adequately handle errors if any
  };

  render() {
    return (
      <>
        <h2>Recipes</h2>
        {/* show spinner when loading is true */}
        {/* set redirect state to true when button is clicked */}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <button
            className="btn btn-primary mb-2"
            onClick={() => this.setState({ redirectToAddRecipePage: true })}
          >
            Add Recipe
          </button>
        )}
        {/* if redirect state is true, evaluate Redirect component to the specified endpoint */}
        {this.state.redirectToAddRecipePage && <Redirect to="/recipe" />}

        <RecipeList
          onDeleteClick={this.handleDeleteRecipe}
          recipes={this.props.recipes}
        />
      </>
    );
  }
}

// this function specifies what state you want to pass to your component as props
// *Be specific and only request the data your component needs so that the component only rerenders when the state exposed to it changes
function mapStateToProps(state: IState) {
  // it returns an object - each object key becomes a prop on the component
  return {
    recipes:
      // check that authors array has been populated before setting recipes state
      state.authors.length === 0
        ? []
        : state.recipes.map((recipe) => {
            // map over recipes array and append each author name to the corresponding author Id
            return {
              ...recipe,
              authorName: state.authors.find((a) => a.id === recipe.authorId)
                ?.name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  // bindActionCreators return an object mimicking the original object but with each action wrapped in a call to dispatch
  return {
    actions: {
      loadRecipes: bindActionCreators(RecipeActions.loadRecipes, dispatch),
      loadAuthors: bindActionCreators(AuthorActions.loadAuthors, dispatch),
      deleteRecipe: bindActionCreators(RecipeActions.deleteRecipe, dispatch),
    },
  };
}

// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);

import React from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import * as RecipeActions from "../../redux/actions/RecipeActions";
import * as AuthorActions from "../../redux/actions/authorActions";
import RecipeList from "./RecipeList";
import { IRecipePageProps, IState } from "./../../types";
import { bindActionCreators, Dispatch } from "redux"; // helper funtion to wrap action creators in dispatch calls
import { Redirect } from "react-router-dom"; // react-router redirect component

class RecipesPage extends React.Component<IRecipePageProps> {
  // declare redirect state initialised to false
  state = {
    redirectToAddRecipePage: false,
  };

  componentDidMount() {
    const { recipes, authors, actions } = this.props;

    if (recipes.length === 0) {
      actions.loadRecipes().catch((error: any) => {
        alert("Loading recipes failed " + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error: any) => {
        alert("Loading authors failed " + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Recipes</h2>
        {/* set redirect state to true when button is clicked */}
        <button
          className="btn btn-primary mb-2"
          onClick={() => this.setState({ redirectToAddRecipePage: true })}
        >
          Add Recipe
        </button>
        {/* if redirect state is true, evaluate Redirect component to the specified endpoint */}
        {this.state.redirectToAddRecipePage && <Redirect to="/recipe" />}

        <RecipeList recipes={this.props.recipes} />

        {/* {this.props.recipes.map((recipe, index) => (
          <div key={index}>{recipe.title}</div>
        ))} */}
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
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  // bindActionCreators return an object mimicking the original object but with each action wrapped in a call to dispatch
  return {
    actions: {
      loadRecipes: bindActionCreators(RecipeActions.loadRecipes, dispatch),
      loadAuthors: bindActionCreators(AuthorActions.loadAuthors, dispatch),
    },
  };
}

// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);

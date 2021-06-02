import React from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import * as RecipeActions from "../../redux/actions/RecipeActions";
import RecipeList from "./RecipeList";
import { IRecipePageProps, IState } from "./../../types";
import { bindActionCreators, Dispatch } from "redux"; // helper funtion to wrap action creators in dispatch calls

class RecipesPage extends React.Component<IRecipePageProps> {
  componentDidMount() {
    this.props.actions.loadRecipes().catch((error: any) => {
      alert("Loading recipes failed " + error);
    });
  }
  render() {
    return (
      <>
        <h2>Recipes</h2>
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
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  // bindActionCreators return an object mimicking the original object but with each action wrapped in a call to dispatch
  return {
    actions: bindActionCreators(RecipeActions, dispatch),
  };
}

// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);

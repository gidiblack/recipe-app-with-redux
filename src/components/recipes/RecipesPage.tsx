import React from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import * as RecipeActions from "../../redux/actions/RecipeActions";
import { bindActionCreators } from "redux"; // helper funtion to wrap action creators in dispatch calls

interface IState {
  recipes: IRecipe[];
}

interface IRecipe {
  title: string;
}

interface IAction {
  createRecipe: (param: IRecipe) => void;
}

interface IProps {
  actions: IAction;
  recipes: IState["recipes"];
}

class RecipesPage extends React.Component<IProps> {
  state = {
    recipes: {
      title: "",
    },
  };
  // use arrow function to decare method because they inherit the binding context of their enclosing scope
  handleChange = (e: any) => {
    // copy state using object spread syntax then overwrite the title property by setting it to the target.value passed in on the event
    const recipe = { ...this.state.recipes, title: e.target.value };
    // set the state to the new recipe object
    this.setState({ recipes: recipe });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.actions.createRecipe(this.state.recipes);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Recipes</h2>
        <h3>Add Recipes</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.recipes.title}
        />
        <input type="submit" value="Save" />
        {this.props.recipes.map((recipe: IRecipe, index) => (
          <div key={index}>{recipe.title}</div>
        ))}
      </form>
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

function mapDispatchToProps(dispatch: any) {
  // bindActionCreators return an object mimicking the original object but with each action wrapped in a call to dispatch
  return {
    actions: bindActionCreators(RecipeActions, dispatch),
  };
}

// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);

import React from "react";

interface IState {
  recipe: {
    id: number;
    title: string;
  };
}

// interface IProps {
//   title: string;
// }

class RecipesPage extends React.Component {
  state: IState = {
    recipe: {
      id: 0,
      title: "",
    },
  };
  // use arrow function to decare method because they inherit the binding context of their enclosing scope
  handleChange = (e: any) => {
    // copy state using object spread syntax then overwrite the title property by setting it to the target.value passed in on the event
    const recipe = { ...this.state.recipe, title: e.target.value };
    // set the state to the new recipe object
    this.setState({ recipe: recipe });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    alert(this.state.recipe.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Recipes</h2>
        <h3>Add Recipes</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.recipe.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default RecipesPage;

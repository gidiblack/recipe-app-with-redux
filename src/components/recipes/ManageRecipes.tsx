// use arrow function to decare method because they inherit the binding context of their enclosing scope
// const handleChange = (e: any) => {
//   // copy state using object spread syntax then overwrite the title property by setting it to the target.value passed in on the event
//   const recipe = { ...this.state.recipes, title: e.target.value };
//   // set the state to the new recipe object
//   this.setState({ recipes: recipe });
// };

// const handleSubmit = (e: any) => {
//   e.preventDefault();
//   this.props.actions.createRecipe(this.state.recipes);
// };

export const something = [];

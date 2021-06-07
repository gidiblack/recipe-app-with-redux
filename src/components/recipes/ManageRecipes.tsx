import React, { useEffect } from "react";
import { connect } from "react-redux"; // connect function to connect our component to the redux store
import { IState, ManageRecipesProps } from "../../types";
import * as RecipeActions from "../../redux/actions/RecipeActions";
import * as AuthorActions from "../../redux/actions/authorActions";

// destructuring props inline
const ManageRecipes: React.FC<ManageRecipesProps> = ({
  authors,
  recipes,
  loadAuthors,
  loadRecipes,
}) => {
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
  });
  return (
    <>
      <h2> Manage Recipe </h2>
    </>
  );
};

function mapStateToProps(state: IState) {
  return {
    recipes: state.recipes,
    authors: state.authors,
  };
}

// if mapDispatchToProps is declared as an object instead of as a function, each property will automatically be bound(wrapped in call) to dispatch
const mapDispatchToProps = {
  loadRecipes: RecipeActions.loadRecipes,
  loadAuthors: AuthorActions.loadAuthors,
};
// connect function returns a function which immediately calls our component
export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);

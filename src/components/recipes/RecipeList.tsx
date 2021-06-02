import React from "react";
import { Link } from "react-router-dom";
import { IRecipes } from "../../types";

const RecipeList = ({ recipes }: IRecipes): JSX.Element => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map((recipe) => {
        return (
          <tr key={recipe.id}>
            <td>
              <a
                href={
                  "https://www.allnigerianrecipes.com/chicken/barbecue-chicken-wings/"
                }
                className="btn btn-light"
              >
                View
              </a>
            </td>
            <td>
              <Link to={"/recipe/" + recipe.slug}>{recipe.title}</Link>
            </td>
            <td>{recipe.authorName}</td>
            <td>{recipe.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default RecipeList;

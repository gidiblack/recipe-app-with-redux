import React from "react";
import { Link } from "react-router-dom";
import { RecipeListProps } from "../../types";

const RecipeList = ({
  recipes,
  onDeleteClick,
}: RecipeListProps): JSX.Element => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {recipes.map((recipe, index) => {
        return (
          <tr key={index}>
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
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(recipe)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default RecipeList;

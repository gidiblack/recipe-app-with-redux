import React from "react";
import { RecipeFormProps } from "../../types";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";

// this functional component renders the form used to manage recipes
const RecipeForm: React.FC<RecipeFormProps> = (props) => {
  const { recipe, authors, onChange, onSave, saving, errors } = props;
  return (
    <form onSubmit={onSave}>
      <h2>{recipe.id ? "Edit" : "Add"} Recipe</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        placeholder="Enter Recipe Title"
        onChange={onChange}
        value={recipe.title}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        onChange={onChange}
        error={errors.authorId}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        value={recipe.authorId || " "}
      />

      <TextInput
        name="category"
        label="Category"
        placeholder="Enter Category"
        onChange={onChange}
        value={recipe.category}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default RecipeForm;

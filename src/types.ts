export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: IRecipe[];
  authors: IAuthor[];
}

export interface IRecipe {
  id: number | null;
  title: string;
  slug: string;
  authorId: number | null;
  authorName: string | undefined;
  category: string;
}

export interface IAuthors {
  authors: IAuthor[];
}

export interface IAuthor {
  id: number | null;
  name: string;
}

export interface IRecipeAction {
  loadAuthors: any;
  loadRecipes: any;
}

export interface IRecipePageProps {
  recipes: IRecipe[];
  actions: IRecipeAction;
  authors: IAuthor[];
}

export interface IRecipeReducerAction {
  type: string;
  recipes: IRecipes;
}

export interface IAuthorReducerAction {
  type: string;
  authors: IAuthors;
}

export interface RecipeFormProps {
  recipe: IRecipe;
  authors: IAuthor[];
  onSave: () => void;
  onChange: (e: any) => void;
  saving: boolean;
  errors: any;
}

export interface TextInputProps {
  name: string;
  label: string;
  onChange: (e: any) => void;
  placeholder: string;
  value: string;
  error: any;
}

export interface SelectInputProps {
  name: string;
  label: string;
  onChange: (e: any) => void;
  defaultOption: string;
  value: string | number;
  error: any;
  options: any[];
}

export interface ManageRecipesProps {
  recipes: IRecipe[];
  authors: IAuthor[];
  loadAuthors: () => Promise<void>;
  loadRecipes: () => Promise<void>;
}

export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: IRecipe[];
  authors: IAuthor[];
  apiCallsInProgress: number;
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
  deleteRecipe: any;
}

export interface IRecipePageProps {
  recipes: IRecipe[];
  actions: IRecipeAction;
  authors: IAuthor[];
  loading: boolean;
}

export interface IRecipeReducerAction {
  type: string;
  recipes?: IRecipe[];
  recipe: IRecipe;
}

export interface IAuthorReducerAction {
  type: string;
  authors: IAuthors;
}

export interface IApiStatusReducerAction {
  type: string;
}

export interface RecipeFormProps {
  recipe: IRecipe;
  authors: IAuthor[];
  onSave: (e: any) => void;
  onChange: (e: any) => void;
  saving: boolean;
  errors: any;
}

export interface RecipeListProps {
  recipes: IRecipe[];
  onDeleteClick: (recipe: IRecipe) => void;
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
  recipe: IRecipe;
  loadAuthors: () => Promise<void>;
  loadRecipes: () => Promise<void>;
  saveRecipe: (recipe: IRecipe) => Promise<void>;
}

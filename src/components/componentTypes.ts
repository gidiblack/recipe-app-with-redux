export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: IRecipe[];
}

export interface IRecipe {
  id: number | null;
  title: string;
  slug: string;
  authorId: number | null;
  category: string;
}

export interface IAuthors {
  authors: IAuthor[];
}

export interface IAuthor {
  id: number | null;
  name: string;
}

export interface IAction {
  createRecipe: (param: IRecipe) => void;
}

export interface IRecipePageProps {
  actions: IAction;
  recipes: IRecipes["recipes"];
}

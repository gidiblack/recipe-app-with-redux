export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: IRecipes;
  authors: IAuthors;
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

export interface IRecipeAction {
  createRecipe: (param: IRecipe) => void;
  loadRecipes: () => Promise<[]>;
}

export interface IRecipePageProps {
  actions: IRecipeAction;
  recipes: IRecipes["recipes"];
}

export interface IRecipeReducerAction {
  type: string;
  recipes: IRecipes;
}

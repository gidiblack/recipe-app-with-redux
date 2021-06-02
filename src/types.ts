export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: IRecipes["recipes"];
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
  loadRecipes: any;
}

export interface IRecipePageProps {
  recipes: IRecipes["recipes"];
  actions: IRecipeAction;
}

export interface IRecipeReducerAction {
  type: string;
  recipes: IRecipes;
}

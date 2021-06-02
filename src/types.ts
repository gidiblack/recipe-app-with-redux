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

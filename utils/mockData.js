const recipeData = [
  {
    id: 1,
    title: "Grilled fish sticks",
    slug: "grilled-fish-sticks",
    authorId: 1,
    category: "Fish",
  },
  {
    id: 2,
    title: "Egusi Soup",
    slug: "egusi-soup",
    authorId: 3,
    category: "Soup",
  },
  {
    id: 3,
    title: "Jollof Rice",
    slug: "jollof-rice",
    authorId: 2,
    category: "Rice",
  },
  {
    id: 4,
    title: "Coconut Rice",
    slug: "coconut-rice",
    authorId: 2,
    category: "Rice",
  },
  {
    id: 5,
    title: "Fish Stew",
    slug: "fish-stew",
    authorId: 3,
    category: "Fish",
  },
  {
    id: 6,
    title: "Fried Chicken",
    slug: "fried-chicken",
    authorId: 1,
    category: "Chicken",
  },
  {
    id: 7,
    title: "Grilled Chicken",
    slug: "grilled-chicken",
    authorId: 2,
    category: "Chicken",
  },
  {
    id: 8,
    title: "Alfredo Pasta",
    slug: "alfredo-pasta",
    authorId: 1,
    category: "Pasta",
  },
  {
    id: 9,
    title: "Peppered Spaghetti",
    slug: "peppered-spaghetti",
    authorId: 3,
    category: "Pasta",
  },
  {
    id: 10,
    title: "Afang Soup",
    slug: "afang-soup",
    authorId: 3,
    category: "Soup",
  },
];

const authorData = [
  { id: 1, name: "Dan Wilder" },
  { id: 2, name: "Oprah Winphrey" },
  { id: 3, name: "Father Abraham" },
];

const newRecipe = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRecipe,
  recipeData,
  authorData,
};

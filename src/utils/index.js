import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, { lower: true })
);

export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);

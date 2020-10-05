import { useEffect, useState } from 'react';

import { getRecipes } from '../../repositories/Recipes';
import { Recipes } from '../../types';

const GetRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  function SortRecipesByDate(recipes: Recipes[]) {
    recipes.sort((recipe_01: Recipes, recipe_02: Recipes) => {
      const date_01InMs = new Date(`${recipe_01.updated_at}`).getTime();
      const date_02InMs = new Date(`${recipe_02.updated_at}`).getTime();

      return date_02InMs - date_01InMs;
    });
    return recipes;
  }

  useEffect(() => {
    getRecipes()
      .then((recipeDbData) => {
        const recipeSortedByDate = SortRecipesByDate(recipeDbData);

        setRecipes(recipeSortedByDate);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return [recipes];
};

export default GetRecipes;

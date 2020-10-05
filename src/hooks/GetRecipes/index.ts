import { useEffect, useState } from 'react';

import { getRecipes } from '../../repositories/Recipes';
import { Recipes } from '../../types';

const GetRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([{ updated_at: '' }]);

  useEffect(() => {
    getRecipes()
      .then((recipeDbData) => {
        const recipeSortedByDate = recipeDbData.sort(
          (recipe_01: Recipes, recipe_02: Recipes) => {
            const date_01InMs = new Date(`${recipe_01.updated_at}`).getTime();
            const date_02InMs = new Date(`${recipe_02.updated_at}`).getTime();

            return date_02InMs - date_01InMs;
          }
        );

        setRecipes(recipeSortedByDate);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const recipesLastUpdate = new Date(
  //   Math.max(
  //     ...recipes.map((recipe: Recipes) =>
  //       new Date(`${recipe.updated_at}`).getTime()
  //     )
  //   )
  // ).toLocaleDateString();

  return [recipes];
};

export default GetRecipes;

import { useEffect, useState } from 'react';

import { getRecipes } from '../../repositories/Recipes';
import { Recipes } from '../../types';

const GetRecipes = () => {
  const [recipesRaw, setRecipesRaw] = useState<Recipes[]>([{ updated_at: '' }]);
  const [recipes, setRecipes] = useState(recipesRaw);
  //getting recipes from Db
  useEffect(() => {
    getRecipes()
      .then((recipeDbData) => {
        setRecipesRaw(recipeDbData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // sorting recipes by updated_at
  useEffect(() => {
    setRecipes(
      recipesRaw.sort((recipe_01: Recipes, recipe_02: Recipes) => {
        const date1InMs = new Date(`${recipe_01.updated_at}`).getTime();
        const date2InMs = new Date(`${recipe_02.updated_at}`).getTime();

        return date2InMs - date1InMs;
      })
    );
  }, [recipesRaw]);

  // const recipeUpated =  new Date(
  //   Math.max(...recipes.map((recipe: any) => new Date(recipe.updated_at)))
  // ).toLocaleDateString();

  return [recipes];
};

export default GetRecipes;

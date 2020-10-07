import { useEffect, useState } from 'react';
import IRecipes from '../../Interfaces/IRecipes';

import { getRecipes } from '../../repositories/Recipes';

const GetRecipesHook = () => {
  const initialRecipeValues: IRecipes = {
    id: '',
    recipe_name: '',
    owner_id: '',
    description: '',
    style_id: '',
    created_at: '',
    updated_at: '',
    srm: 0,
    fg: 0,
    og: 0,
    ibu: 0,
    abv: 0,
    color: 0,
    hops: [{}],
    fermentables: [{}],
    yeast: [{}],
  };
  const [recipes, setRecipes] = useState<IRecipes[]>([initialRecipeValues]);

  function SortRecipesByDate(recipes: IRecipes[]) {
    recipes.sort((recipe_01: IRecipes, recipe_02: IRecipes) => {
      const date_01InMs = new Date(recipe_01.updated_at).getTime();
      const date_02InMs = new Date(recipe_02.updated_at).getTime();

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

export default GetRecipesHook;

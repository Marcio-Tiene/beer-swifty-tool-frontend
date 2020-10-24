import { useEffect, useState } from 'react';
import IRecipes from '../../Interfaces/IRecipes';

import api from '../../services/api';

const GetRecipesHook = () => {
  const initialRecipeValues: IRecipes = {
    id: '',
    name: '',
    user_id: '',
    description: '',
    final_volume: 0,
    global_efficiency: 0,
    img_url: '',
    is_private: true,
    notes: '',
    short_description: '',
    style_id: '',
    created_at: '',
    updated_at: '',
    fg: 0,
    og: 0,
    ibu: 0,
    abv: 0,
    color: 0,
    hops_recipe: [{ id: '0', quantity: 0, add_time: 0, add_type: '' }],
    fermentables_recipe: [{ id: '0', quantity: 0, color: 0, potenttial: 0 }],
    yeast_recipe: [{ id: '0' }],
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
    (async function loadRecipes(): Promise<void> {
      try {
        const response = await api.get('/recipes');
        const sortedRecipesByDate = SortRecipesByDate(response.data);
        setRecipes(sortedRecipesByDate);
      } catch (err) {
        console.log('algo de errado não está certo');
      }
    })();
  }, []);

  return [recipes];
};

export default GetRecipesHook;

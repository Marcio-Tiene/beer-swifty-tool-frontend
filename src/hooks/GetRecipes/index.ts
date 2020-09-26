import { useEffect, useState } from 'react';
import { getRecipes } from '../../repositories/Recipes';

const GetRecipes = () => {
  const [recipesRaw, setRecipesRaw] = useState<any>([
    {
      id: 0,
      recipe_name: '',
      abv: 0,
      style_id: 0,
      updated_at: '',
    },
  ]);
  const [recipes, setRecipes] = useState<any>([
    {
      id: 0,
      recipe_name: '',
      abv: 0,
      style_id: 0,
      updated_at: '',
    },
  ]);

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipesRaw(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setRecipes(
      recipesRaw.sort((a: any, b: any) => {
        var c = new Date(b.updated_at).getTime();
        var d = new Date(a.updated_at).getTime();

        return c - d;
      })
    );
  }, [recipesRaw]);

  return [recipes, setRecipes];
};

export default GetRecipes;

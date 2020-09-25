import { useEffect, useState } from 'react';
import { getRecipes } from '../../repositories/Recipes';

const GetRecipes = () => {
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
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return [recipes, setRecipes];
};

export default GetRecipes;

import { useEffect, useState } from 'react';
import { getRecipes } from '../../repositories/Recipes';

const GetRecipes = () => {
  const [recipes, setRecipes] = useState<any>([
    {
      id: 0,
      recipe_name: '',
      abv: 0,
      style: '',
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

    // getRecipes();
  }, []);

  return [recipes, setRecipes];
};
// const recipeUpdate: string = recipes[0].updated_at;

export default GetRecipes;

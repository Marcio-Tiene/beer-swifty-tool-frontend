import React, { useState, useEffect } from 'react';
import { getRecipes } from '../../../repositories/Recipes';
interface Recipes {
  id?: number;
  recipe_name?: string;
  abv?: number;
  style?: string;
}
const RecipeBanner = () => {
  const [recipes, setRecipes] = useState([{}]);
  // const recipeLenght =
  //   recipes.length <= 0
  //     ? `Total de 0 receitas`
  //     : recipes.length === null || NaN
  //     ? `Total de 0 receitas`
  //     : recipes.length === 1
  //     ? `Total de ${recipes.length} receita`
  //     : `Total de ${recipes.length} receitas`;

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {recipes.slice(0, 3).map((recipes: Recipes) => {
        return (
          <div key={`${recipes.id}${recipes.recipe_name} `}>
            <h1>{recipes.recipe_name}</h1>
            <h3>Estilo: {recipes.style}</h3>
            <h3> ABV: {recipes.abv}%</h3>

            <hr />
          </div>
        );
      })}
    </>
  );
};
export default RecipeBanner;

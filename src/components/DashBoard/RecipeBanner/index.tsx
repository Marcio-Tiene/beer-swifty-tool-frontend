import React from 'react';
import GetRecipes from '../../../hooks/GetRecipes';

const RecipeBanner = () => {
  const [recipes] = GetRecipes();
  return (
    <>
      {recipes.slice(0, 3).map((recipes: any) => {
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

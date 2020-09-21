import React from 'react';
import * as Server from '../../../data/server.json';

export const logedUser = Server.user.marcio.recipes;
export const recipeLenght =
  logedUser.recipe.length > 1
    ? `Total de ${logedUser.recipe.length} receitas`
    : `Total de ${logedUser.recipe.length} receita`;

export const recipeUpdate = `Ultima atualização em ${logedUser.recipe_updated_at.substring(
  0,
  10
)}`;
const RecipeBanner = () => {
  return (
    <>
      {logedUser.recipe.map((recipe, i: number) => {
        while (i < 3) {
          console.log();
          return (
            <div key={recipe.id}>
              <h1>{logedUser.recipe[i].recipe_name}</h1>
              <h3>Estilo: {logedUser.recipe[i].style}</h3>
              <h3> ABV: {logedUser.recipe[i].abv}%</h3>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};
export default RecipeBanner;

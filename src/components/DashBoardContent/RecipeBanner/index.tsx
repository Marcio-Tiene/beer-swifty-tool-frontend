import React from 'react';
import { useHistory } from 'react-router';

import IRecipes from '../../../Interfaces/IRecipes';

import Card from '../../Card';

import { DashBoardRecipeCard, DivName, Span } from './styles';

const RecipeBanner = () => {
  const recipes: IRecipes[] = JSON.parse(
    localStorage.getItem('myRecipes') as string
  );

  const recipesLastUpdate = new Date(
    Math.max(...recipes.map((recipe) => new Date(recipe.updated_at).getTime()))
  ).toLocaleDateString();

  const history = useHistory();

  const recipeLenght =
    recipes.length <= 0
      ? `Total de 0 receitas`
      : recipes.length === null || NaN
      ? `Total de 0 receitas`
      : recipes.length === 1
      ? `Total de ${recipes.length} receita`
      : `Total de ${recipes.length} receitas`;

  return (
    <>
      <Card
        OnClick={() => {
          history.push('/recipes');
        }}
        Title='Recipes'
        TitleBg='var(--primary-color)'
        CardInfo1={recipeLenght}
        CardInfo2={recipesLastUpdate}
      >
        {recipes.map((recipes) => {
          let updatedAt: string = new Date(
            recipes.updated_at
          ).toLocaleDateString();

          return (
            <DashBoardRecipeCard key={`${recipes.id}${recipes.name} `}>
              <Span BgImg={recipes.img_url} />
              <DivName>
                <h1>{recipes.name}</h1>

                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <h5>
                EBC:&nbsp;{recipes.color.toFixed(1)} &nbsp;&nbsp; ABV:&nbsp;{' '}
                {recipes.abv.toFixed(1)}% &nbsp;&nbsp; IBU:&nbsp;
                {recipes.ibu.toFixed(1)}
              </h5>
            </DashBoardRecipeCard>
          );
        })}
      </Card>
    </>
  );
};
export default RecipeBanner;

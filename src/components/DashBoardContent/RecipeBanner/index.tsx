import React from 'react';
import { useHistory } from 'react-router';

import GetRecipes from '../../../services/GetRecipes';

import Card from '../../Card';

import { DashBoardRecipeCard, DivName, Span } from './styles';

const RecipeBanner = () => {
  const { recipes, totalOfRecipes, recipesLastUpdate } = new GetRecipes();

  const history = useHistory();

  return (
    <>
      <Card
        OnClick={() => {
          history.push('/recipes');
        }}
        Title='Recipes'
        TitleBg='var(--primary-color)'
        CardInfo1={totalOfRecipes}
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

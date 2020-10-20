import React from 'react';
import { useHistory } from 'react-router';

import GetRecipesHook from '../../../hooks/GetRecipesHook';
import GetStylesHook from '../../../hooks/GetStylesHook';

import IStyles from '../../../Interfaces/IStyles';
import Card from '../../Card';

import { DashBoardRecipeCard, DivName, Span } from './styles';

const RecipeBanner = () => {
  const [styles] = GetStylesHook();

  const [recipes] = GetRecipesHook();

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
          let styleName: string = '';
          let styleImg: string = '';
          let updatedAt: string = new Date(
            recipes.updated_at
          ).toLocaleDateString();

          styles.map((style: IStyles) => {
            if (style.id === recipes.style_id) {
              styleName = style.style_name;
              styleImg = style.image_url;
            }
            return 1;
          });
          return (
            <DashBoardRecipeCard key={`${recipes.id}${recipes.name} `}>
              <Span BgImg={styleImg} />
              <DivName>
                <h1>{recipes.name}</h1>
                <h3>{styleName}</h3>
                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <h5 style={{ alignSelf: 'center', width: '33%' }}>
                EBC:&nbsp;{recipes.color} &nbsp;&nbsp; ABV:&nbsp;{' '}
                {Number(recipes.abv).toFixed(1)}% &nbsp;&nbsp; IBU:&nbsp;
                {recipes.ibu}
              </h5>
            </DashBoardRecipeCard>
          );
        })}
      </Card>
    </>
  );
};
export default RecipeBanner;

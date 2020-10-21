import React from 'react';
import GetRecipesHook from '../../hooks/GetRecipesHook';

import IRecipes from '../../Interfaces/IRecipes';

import {
  RecipeListPageDiv,
  Wrapper,
  RecipeListPageCard,
  RecipeInfoBaner,
  Span,
  DivName,
  Desc,
  RecipeAtt,
} from './styles';

const RecipeListContent = () => {
  const [recipes] = GetRecipesHook();

  const recipesLastUpdate = new Date(
    Math.max(...recipes.map((recipe) => new Date(recipe.updated_at).getTime()))
  ).toLocaleDateString();

  return (
    <Wrapper>
      <RecipeListPageDiv>
        <h1 style={{ textAlign: 'left', width: '90%', marginBottom: '13px' }}>
          Receitas
        </h1>
        <p style={{ textAlign: 'left', width: '90%', marginBottom: '13px' }}>
          Última atualização em : {recipesLastUpdate}
        </p>
        {recipes.map((recipes: IRecipes) => {
          let updatedAt = new Date(`
            ${recipes.updated_at}`).toLocaleDateString();

          return (
            <RecipeListPageCard key={`${recipes.id}${recipes.name} `}>
              <Span BgImg={recipes.img_url} />
              <DivName>
                <h1>{recipes.name}</h1>

                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <Desc>{recipes.description}</Desc>
              <RecipeAtt>
                <h3 style={{ color: '#592B02' }}>
                  EBC:&nbsp;{recipes.color} &nbsp; &nbsp; ABV:&nbsp;{' '}
                  {Number(recipes.abv).toFixed(1)}% &nbsp;&nbsp;IBU: &nbsp;
                  {recipes.ibu}{' '}
                </h3>
                <h1>Aqui Vem o rating</h1>
              </RecipeAtt>
            </RecipeListPageCard>
          );
        })}
      </RecipeListPageDiv>
      <RecipeInfoBaner></RecipeInfoBaner>
    </Wrapper>
  );
};

export default RecipeListContent;

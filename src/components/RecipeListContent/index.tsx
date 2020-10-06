import React from 'react';
import GetRecipesHook from '../../hooks/GetRecipesHook';
import GetStylesHook from '../../hooks/GetStylesHook';
import IStyles from '../../Interfaces/IBeerStyles';
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
  const [styles] = GetStylesHook();

  const [recipes] = GetRecipesHook();

  const recipesLastUpdate = new Date(
    Math.max(
      ...recipes.map((recipe: IRecipes) =>
        new Date(`${recipe.updated_at}`).getTime()
      )
    )
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
          let styleDesc = '';
          let styleName = '';
          let styleImg = '';
          let updatedAt = new Date(`
            ${recipes.updated_at}`).toLocaleDateString();

          styles.map((style: IStyles) => {
            if (style.id === recipes.style_id) {
              styleDesc = style.description as string;
              styleName = style.style_name as string;
              styleImg = style.image_url as string;
            }
            return 1;
          });
          return (
            <RecipeListPageCard key={`${recipes.id}${recipes.recipe_name} `}>
              <Span BgImg={styleImg} />
              <DivName>
                <h1>{recipes.recipe_name}</h1>
                <h3>{styleName}</h3>
                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <Desc>{styleDesc}</Desc>
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

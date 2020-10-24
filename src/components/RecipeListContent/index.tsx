import React, { useEffect, useState } from 'react';
import GetRecipesHook from '../../hooks/GetRecipesHook';
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const RecipeListContent = () => {
  const [recipes] = GetRecipesHook();

  const [infoCardValues, setInfoCardValues] = useState(recipes[0]);

  useEffect(() => {
    setInfoCardValues(recipes[0]);
  }, [recipes]);

  const recipeUpdatedTime = new Date(
    infoCardValues.updated_at
  ).toLocaleTimeString();
  const recipesLastUpdate = new Date(
    Math.max(...recipes.map((recipe) => new Date(recipe.updated_at).getTime()))
  ).toLocaleDateString();

  return (
    <Wrapper>
      <RecipeListPageDiv>
        <div className='divTittle'>
          <h1 className='tittle'>Receitas </h1>
          <Link to='/'>
            <AiOutlinePlusCircle size={30} color='#f29f05' />
          </Link>
        </div>

        <div className='subtittle'>
          <p>Total de {recipes.length} receitas</p>
          <p>Última atualização em : {recipesLastUpdate}</p>
        </div>
        {recipes.map((recipes: IRecipes) => {
          let updatedAt = new Date(recipes.updated_at).toLocaleDateString();
          return (
            <RecipeListPageCard
              isActive={infoCardValues.id === recipes.id ? true : false}
              onClickCapture={() => setInfoCardValues(recipes)}
              key={`${recipes.id}${recipes.name} `}
            >
              <Span BgImg={recipes.img_url} />
              <DivName>
                <h1>{recipes.name}</h1>

                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <Desc>
                <p>{recipes.short_description}</p>
              </Desc>
              <RecipeAtt>
                <div className='attributes'>
                  <h3>EBC: {recipes.color} </h3>{' '}
                  <h3>ABV: {Number(recipes.abv).toFixed(1)}%</h3>{' '}
                  <h3>IBU: {recipes.ibu}</h3>
                </div>
                <div className='rating'>
                  <Rating StarSize={25} />
                </div>
              </RecipeAtt>
            </RecipeListPageCard>
          );
        })}
      </RecipeListPageDiv>
      <RecipeInfoBaner>
        <h1>{infoCardValues.name}</h1>
        <h2>{infoCardValues.short_description}</h2>
        <p>{infoCardValues.id}</p>
        <h3>{recipeUpdatedTime}</h3>
      </RecipeInfoBaner>
    </Wrapper>
  );
};

export default RecipeListContent;

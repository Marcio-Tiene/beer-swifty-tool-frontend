import React from 'react';
import GetRecipesHook from '../../hooks/GetRecipesHook';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaStarHalf, FaStar } from 'react-icons/fa';

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

const RecipeListContent = () => {
  const [recipes] = GetRecipesHook();

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
            <RecipeListPageCard key={`${recipes.id}${recipes.name} `}>
              <Span BgImg={recipes.img_url} />
              <DivName>
                <h1>{recipes.name}</h1>

                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <Desc>{recipes.description}</Desc>
              <RecipeAtt>
                <div className='attributes'>
                  <h3>EBC: {recipes.color} </h3>{' '}
                  <h3>ABV: {Number(recipes.abv).toFixed(1)}%</h3>{' '}
                  <h3>IBU: {recipes.ibu}</h3>
                </div>
                <h1>
                  <FaStar size={25} />
                  <FaStar size={25} />
                  <FaStar size={25} />
                  <FaStar size={25} />
                  <FaStarHalf />
                  4,7
                </h1>
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

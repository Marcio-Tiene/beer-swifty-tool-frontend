import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';

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
  RecipeBannerContainer,
} from './styles';
import { Link, useHistory } from 'react-router-dom';
import Rating from '../Rating';
import GetRecipes from '../../services/GetRecipes';

const RecipeListContent = () => {
  const history = useHistory();
  const { recipes, hasRecipes } = new GetRecipes();

  const [infoCardValues, setInfoCardValues] = useState(recipes[0]);

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
        {hasRecipes ? (
          <>
            <RecipeBannerContainer>
              {recipes.map((recipes: IRecipes) => {
                let updatedAt = new Date(
                  recipes.updated_at
                ).toLocaleDateString();
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
                        <h3>SRM: {recipes.color.toFixed(1)} </h3>{' '}
                        <h3>ABV: {recipes.abv.toFixed(1)}%</h3>{' '}
                        <h3>IBU: {recipes.ibu.toFixed(1)}</h3>
                      </div>
                      <div className='rating'>
                        <Rating StarSize={25} />
                      </div>
                    </RecipeAtt>
                  </RecipeListPageCard>
                );
              })}
            </RecipeBannerContainer>
          </>
        ) : (
          <h1>
            Você ainda não tem receitas ou está acessando de um dispositivo novo
            sem conexão com nosso banco de dados
          </h1>
        )}
      </RecipeListPageDiv>
      <RecipeInfoBaner hasRecipes={hasRecipes}>
        <div className='title-container'>
          <h1 className='info-card-title'>{infoCardValues.name}</h1>
          <MdModeEdit
            onClick={() => history.push(`/recipes/${infoCardValues.id}`)}
            className='edit-button'
            size={27}
            color='var(--primary-color)'
          />
        </div>
        <div className='rating-container'>
          <Rating StarSize={25} />
        </div>

        <h2>{infoCardValues.description}</h2>
        <p>{infoCardValues.og}</p>
        <p>{infoCardValues.fg}</p>
        <p>{infoCardValues.global_efficiency}</p>
        <p>{infoCardValues.notes}</p>
        <img
          src={infoCardValues.img_url}
          style={{
            maxWidth: '100%',
          }}
          alt='Imagem da receita'
        />
        <h3>{recipeUpdatedTime}</h3>
      </RecipeInfoBaner>
    </Wrapper>
  );
};

export default RecipeListContent;

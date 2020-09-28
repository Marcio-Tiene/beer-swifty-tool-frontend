import React from 'react';
import styled from 'styled-components';
import {
  DashBoardRecipeCard,
  DivName,
  Span,
} from '../../components/DashBoardContent/RecipeBanner/styles';
import PageDefault from '../../components/PageDefault';
import RecipeListContent from '../../components/RecipeListContent';
import GetRecipes from '../../hooks/GetRecipes';
import GetStyles from '../../hooks/GetStyles';

const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 8px #00000029;
  border-radius: 16px;

  margin: 2% 1% 0%;

  height: 90%;
  width: 80%;
  cursor: pointer;
  overflow: scroll;
  
  justify-self: center;
  }
  &::-webkit-scrollbar {
 border-radius:16px; 
  width: 16px;
  background: none;
  } 

/* Track */
&::-webkit-scrollbar-track {
  border-radius:16px;
  background: none;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  border-radius:16px;
  

  background: var(--primary-color);

  
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);

`;

const Recipes: React.FC = () => {
  const [styles] = GetStyles();

  const [recipes] = GetRecipes();
  return (
    <PageDefault>
      <RecipeListContent />
    </PageDefault>
  );
};

export default Recipes;

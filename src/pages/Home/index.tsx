import React from 'react';
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import DashBoardDiv from '../../components/DashBoardContent/styles';

import IRecipes from '../../Interfaces/IRecipes';
import api from '../../services/api';

const Home = () => {
  const history = useHistory();

  function SortRecipesByDate(recipes: IRecipes[]) {
    recipes.sort((recipe_01: IRecipes, recipe_02: IRecipes) => {
      const date_01InMs = new Date(recipe_01.updated_at).getTime();
      const date_02InMs = new Date(recipe_02.updated_at).getTime();

      return date_02InMs - date_01InMs;
    });
    return recipes;
  }

  async function LogIn(): Promise<void> {
    try {
      const response = await api.get('/recipes');
      const sortedRecipesByDate = SortRecipesByDate(response.data);

      localStorage.setItem('myRecipes', JSON.stringify(sortedRecipesByDate));
      history.push('/Dashboard');
    } catch (err) {
      console.log('algo de errado não está certo');
    }
  }

  return (
    <DashBoardDiv>
      <Card
        Title='Clique aqui para ir para o Dashboard'
        OnClick={() => LogIn()}
        TitleBg={'var(--tertiary-color)'}
      >
        <h1>Home Page/ Landing Page </h1>
      </Card>
    </DashBoardDiv>
  );
};

export default Home;

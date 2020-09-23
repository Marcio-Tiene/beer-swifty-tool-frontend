import React, { useEffect, useState } from 'react';
import UnderConst from '../../assets/img/under-contruction.png';
import { getRecipes } from '../../repositories/Recipes';

import Card from '../Card';
import RecipeBanner from './RecipeBanner';

import DashBoardDiv, { Title, UcImg } from './styles';

interface Dashboard {
  updated_at?: string;
}

const Dashboard = () => {
  const [recipes, setRecipes] = useState([{ updated_at: '' }]);
  const recipeLenght =
    recipes.length <= 0
      ? `Total de 0 receitas`
      : recipes.length === null || NaN
      ? `Total de 0 receitas`
      : recipes.length === 1
      ? `Total de ${recipes.length} receita`
      : `Total de ${recipes.length} receitas`;

  const recipeUpdate = recipes[0].updated_at.substring(0, 10);

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <DashBoardDiv>
        <Title>Dashboard</Title>
      </DashBoardDiv>
      <DashBoardDiv>
        <Card
          Title='Recipes'
          TitleBg='var(--primary-color)'
          CardInfo1={recipeLenght}
          CardInfo2={recipeUpdate}
        >
          <RecipeBanner />
        </Card>
        <Card
          Title='Recipes'
          TitleBg='var(--tertiary-color)'
          CardInfo1='Total de 45 receitas'
          CardInfo2='Ultima ataulização em 20/09/2020'
        >
          <UcImg src={UnderConst} />
        </Card>
      </DashBoardDiv>

      <DashBoardDiv>
        <Card TitleBg='var(--secondary-color)'>
          <UcImg src={UnderConst} />
        </Card>
        <Card TitleBg='var(--quaternary-color)'>
          <UcImg src={UnderConst} />
        </Card>
      </DashBoardDiv>
    </>
  );
};

export default Dashboard;

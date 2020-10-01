import React from 'react';
import { useHistory } from 'react-router';

import GetRecipes from '../../hooks/GetRecipes';

import Card from '../Card';
import RecipeBanner from './RecipeBanner';

import DashBoardDiv, { Title } from './styles';

const DashboardContent = () => {
  const [recipes] = GetRecipes();
  let history = useHistory();

  const recipeLenght =
    recipes.length <= 0
      ? `Total de 0 receitas`
      : recipes.length === null || NaN
      ? `Total de 0 receitas`
      : recipes.length === 1
      ? `Total de ${recipes.length} receita`
      : `Total de ${recipes.length} receitas`;

  const recipeUpated = new Date(
    Math.max(...recipes.map((e: any) => new Date(e.updated_at)))
  ).toLocaleDateString();

  return (
    <>
      <DashBoardDiv>
        <Title>Dashboard</Title>
      </DashBoardDiv>
      <DashBoardDiv>
        <Card
          OnClick={() => {
            history.push('/recipes');
          }}
          Title='Recipes'
          TitleBg='var(--primary-color)'
          CardInfo1={recipeLenght}
          CardInfo2={recipeUpated}
        >
          <RecipeBanner />
        </Card>
        <Card Title='Under Construction' TitleBg='var(--tertiary-color)'></Card>
      </DashBoardDiv>

      <DashBoardDiv>
        <Card
          Title='Under Construction'
          TitleBg='var(--secondary-color)'
        ></Card>
        <Card
          Title='Under Construction'
          TitleBg='var(--quaternary-color)'
        ></Card>
      </DashBoardDiv>
    </>
  );
};

export default DashboardContent;

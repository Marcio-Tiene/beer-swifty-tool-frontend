import React from 'react';
import { useHistory } from 'react-router';

import GetRecipes from '../../hooks/GetRecipes';
import { Recipes } from '../../types';

import Card from '../Card';
import RecipeBanner from './RecipeBanner';

import DashBoardDiv, { Title } from './styles';

const DashboardContent: React.FC = () => {
  const [recipes] = GetRecipes();

  const recipesLastUpdate = new Date(
    Math.max(
      ...recipes.map((recipe: Recipes) =>
        new Date(`${recipe.updated_at}`).getTime()
      )
    )
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
          CardInfo2={recipesLastUpdate}
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

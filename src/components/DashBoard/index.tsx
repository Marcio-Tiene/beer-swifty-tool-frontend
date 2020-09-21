import React from 'react';
import UnderConst from '../../assets/img/under-contruction.png';

import Card from '../Card';
import RecipeBanner, { recipeLenght, recipeUpdate } from './RecipeBanner';

import DashBoardDiv, { Title, UcImg } from './styles';

const Dashboard = () => {
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

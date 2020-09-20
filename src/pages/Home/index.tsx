import React from 'react';

import PageDefault from '../../components/PageDefault/indext';
import { Container, Title } from './style';
import DashBoard from '../../components/DashBoard';
import Card from '../../components/DashBoard/Card';

import * as Server from '../../data/server.json';

const Home: React.FC = () => {
  const recipeLenght =
    Server.recipes.recipe_list.length < 1
      ? `Total de ${Server.recipes.recipe_list.length} receitas`
      : `Total de ${Server.recipes.recipe_list.length} receita`;

  const recipeUpdate = `Ultima atualização em ${Server.recipes.recipe_updated_at}`;
  return (
    <PageDefault>
      <Container>
        <Title>Dashboard</Title>
        <DashBoard>
          <Card
            Title='Recipes'
            TitleBg='var(--primary-color)'
            CardInfo1='Total de 45 receitas'
            CardInfo2='Ultima ataulização em 20/09/2020'
          >
            {' '}
            <div>dajshdaksjh</div>kjasdkjha{' '}
          </Card>
          <Card
            Title='Recipes'
            TitleBg='var(--tertiary-color)'
            CardInfo1={recipeLenght}
            CardInfo2={recipeUpdate}
          >
            kjasdkjha
          </Card>
          <Card TitleBg='var(--secondary-color)'>kjasdkjha</Card>
          <Card TitleBg='var(--quaternary-color)'>kjasdkjha</Card>
        </DashBoard>
      </Container>
    </PageDefault>
  );
};

export default Home;

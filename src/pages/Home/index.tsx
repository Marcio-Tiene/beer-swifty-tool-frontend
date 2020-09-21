import React from 'react';

import PageDefault from '../../components/PageDefault/indext';
import { Container, Title } from './style';
import DashBoard from '../../components/DashBoard';
import Card from '../../components/DashBoard/Card';

import * as Server from '../../data/server.json';

const Home: React.FC = () => {
  const logedUser = Server.user.marcio.recipes;
  const recipeLenght =
    logedUser.recipe.length > 1
      ? `Total de ${logedUser.recipe.length} receitas`
      : `Total de ${logedUser.recipe.length} receita`;

  const recipeUpdate = `Ultima atualização em ${logedUser.recipe_updated_at.substring(
    0,
    10
  )}`;
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
            {logedUser.recipe.map((recipe, i: number) => {
              while (i < 3) {
                return (
                  <>
                    <h1 key={recipe.id}>{logedUser.recipe[i].recipe_name}</h1>
                    <h3 key={recipe.id}>Estilo: {logedUser.recipe[i].style}</h3>
                    <h3 key={recipe.id}>ABV: {logedUser.recipe[i].abv}%</h3>
                    <hr />
                  </>
                );
              }
              return null;
            })}
          </Card>
          <Card TitleBg='var(--secondary-color)'>kjasdkjha</Card>
          <Card TitleBg='var(--quaternary-color)'>kjasdkjha</Card>
        </DashBoard>
      </Container>
    </PageDefault>
  );
};

export default Home;

import React from 'react';

import PageDefault from '../../components/PageDefault/indext';
import { Container, Title } from './style';
import DashBoard from '../../components/DashBoard';
import Card from '../../components/Card';

const Home: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <Title>Dashboard</Title>
        <DashBoard>
          <Card TitleBg='var(--primary-color)'>
            {' '}
            <div>dajshdaksjh</div>kjasdkjha{' '}
          </Card>
          <Card Title='Recipes' TitleBg='var(--tertiary-color)'>
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

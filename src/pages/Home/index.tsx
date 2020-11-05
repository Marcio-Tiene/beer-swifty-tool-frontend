import React from 'react';

import Card from '../../components/Card';
import DashBoardDiv from '../../components/DashBoardContent/styles';

import Login from '../../services/LogIn';

const Home = () => {
  const login = new Login();

  return (
    <DashBoardDiv>
      <Card
        Title='Clique aqui para ir para o Dashboard'
        OnClick={() => login.LogIn()}
        TitleBg={'var(--tertiary-color)'}
      >
        <h1>Home Page/ Landing Page </h1>
      </Card>
    </DashBoardDiv>
  );
};

export default Home;

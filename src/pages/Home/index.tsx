import React from 'react';
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import DashBoardDiv from '../../components/DashBoardContent/styles';

const Home = () => {
  const history = useHistory();
  return (
    <DashBoardDiv>
      <Card
        Title='Clique aqui para ir para o Dashboard'
        OnClick={() => history.push('/Dashboard')}
        TitleBg={'var(--tertiary-color)'}
      >
        <h1>Home Page/ Landing Page </h1>
      </Card>
    </DashBoardDiv>
  );
};

export default Home;

import React from 'react';
import Card from '../Card';

import RecipeBanner from './RecipeBanner';

import DashBoardDiv, { Title } from './styles';

const DashboardContent: React.FC = () => {
  return (
    <>
      <DashBoardDiv>
        <Title>Dashboard</Title>
      </DashBoardDiv>

      <DashBoardDiv>
        <RecipeBanner />
        <Card />
      </DashBoardDiv>

      <DashBoardDiv>
        <Card />
        <Card />
      </DashBoardDiv>
    </>
  );
};

export default DashboardContent;

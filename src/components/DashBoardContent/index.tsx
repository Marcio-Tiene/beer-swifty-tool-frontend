import React from 'react';

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
        <RecipeBanner />
      </DashBoardDiv>

      <DashBoardDiv>
        <RecipeBanner />
        <RecipeBanner />
      </DashBoardDiv>
    </>
  );
};

export default DashboardContent;

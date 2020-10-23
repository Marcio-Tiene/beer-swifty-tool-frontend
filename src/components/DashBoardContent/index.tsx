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
        <Card TitleBg='var(--tertiary-color)' />
      </DashBoardDiv>

      <DashBoardDiv>
        <Card TitleBg='var(--secondary-color)' />
        <Card TitleBg='var(--quaternary-color)' />
      </DashBoardDiv>
    </>
  );
};

export default DashboardContent;

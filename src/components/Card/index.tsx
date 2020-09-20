import React, { FC } from 'react';
import { CardWrapper, CardTitle } from './styles';

interface CardProps {
  TitleBg?: string;
  Title?: string;
}

const Card: React.FC<CardProps> = ({ children, TitleBg, Title }) => {
  return (
    <CardWrapper>
      <CardTitle BgTitle={TitleBg || '#000'}>
        <h3>{Title}</h3>
      </CardTitle>
      {children}
    </CardWrapper>
  );
};

export default Card;

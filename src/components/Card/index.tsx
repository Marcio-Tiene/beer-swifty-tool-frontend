import React, { FC } from 'react';
import { CardWrapper, CardTitle, CardHeader, CardTitleInf } from './styles';

interface CardProps {
  TitleBg?: string;
  CardInfo1?: string;
  CardInfo2?: string;
  Title?: string;
  OnClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  TitleBg,
  Title,
  CardInfo1,
  CardInfo2,
  OnClick,
}) => {
  return (
    <CardWrapper onClick={OnClick}>
      <CardHeader BgTitle={TitleBg || '#000'}>
        <CardTitle>{Title}</CardTitle>
        <CardTitleInf>{CardInfo1}</CardTitleInf>

        <CardTitleInf>{CardInfo2}</CardTitleInf>
      </CardHeader>
      {children}
    </CardWrapper>
  );
};

export default Card;

import React from 'react';
import { HeaderDiv, LogoImg, Title } from './styles';
import Logo from '../../assets/img/Logo.png';
const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <LogoImg src={Logo} />
      <Title>Beer Swift Tool</Title>
    </HeaderDiv>
  );
};

export default Header;

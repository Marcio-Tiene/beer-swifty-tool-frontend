import React from 'react';
import { HeaderDiv, LogoImg, Title } from './styles';
import Logo from '../../assets/img/Logo.png';
import { useHistory } from 'react-router';
const Header: React.FC = () => {
  const history = useHistory();
  return (
    <HeaderDiv onClick={() => history.push('/')}>
      <LogoImg src={Logo} />
      <Title>Beer Swift Tool</Title>
    </HeaderDiv>
  );
};

export default Header;

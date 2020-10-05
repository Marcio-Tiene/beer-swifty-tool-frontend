import React, { useState } from 'react';
import { NavButton, NavDiv, NavImg, NavText, ExpandButton } from './styles';
import NavSpan1 from '../../assets/img/nav-span-1.png';
import NavSpan2 from '../../assets/img/nav-span-2.png';
import NavSpan3 from '../../assets/img/nav-span-3.png';
import NavSpan4 from '../../assets/img/nav-span-4.png';
import { useHistory } from 'react-router';
const NavMenu: React.FC = () => {
  let history = useHistory();
  const [isActive, setIsActive] = useState(false);

  function Active(): void {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <NavDiv>
      <NavButton
        onClick={() => {
          history.push('/');
        }}
        active={isActive}
      >
        <NavImg src={NavSpan1} alt='' active={isActive} />{' '}
        {isActive && <NavText>Dashboard</NavText>}
      </NavButton>
      <NavButton active={isActive}>
        <NavImg src={NavSpan2} alt='' active={isActive} />
        {isActive && <NavText>Receitas</NavText>}
      </NavButton>
      <NavButton href='#' active={isActive}>
        <NavImg src={NavSpan3} alt='' active={isActive} />
        {isActive && <NavText>Equipamentos</NavText>}
      </NavButton>
      <NavButton active={isActive}>
        <NavImg src={NavSpan4} alt='' active={isActive} />
        {isActive && <NavText>Estoque</NavText>}
      </NavButton>
      <ExpandButton onClick={Active} active={isActive} />
    </NavDiv>
  );
};

export default NavMenu;

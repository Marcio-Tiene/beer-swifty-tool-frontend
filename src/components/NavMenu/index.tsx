import React, { useState } from 'react';
import { NavButton, NavDiv, NavImg, NavText } from './styles';
import NavSpan1 from '../../assets/img/nav-span-1.png';
import NavSpan2 from '../../assets/img/nav-span-2.png';
import NavSpan3 from '../../assets/img/nav-span-3.png';
import NavSpan4 from '../../assets/img/nav-span-4.png';
const NavMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  function Active(): void {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <NavDiv onClick={Active}>
      <NavButton>
        <NavImg src={NavSpan1} alt='' />{' '}
        {isActive && <NavText>Ahahahaha</NavText>}
      </NavButton>
      <NavButton>
        <NavImg src={NavSpan2} alt='' />
      </NavButton>
      <NavButton href='#'>
        <NavImg src={NavSpan3} alt='' />
      </NavButton>
      <NavButton>
        <NavImg src={NavSpan4} alt='' />
      </NavButton>
    </NavDiv>
  );
};

export default NavMenu;

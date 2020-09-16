import styled from 'styled-components';

//HB = Header bar
//NB = Nav Bar
//CT = content

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template-rows: calc(50px + 3vw) auto;
  grid-template-columns: min-content auto;

  grid-template-areas:
    'HB HB'
    'NB CT';
`;

export const NavBar = styled.div`
  grid-area: NB;
  width: 100%;
  height: 100%;
`;

export const HeaderBar = styled.div`
  grid-area: HB;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const Content = styled.div`
  grid-area: CT;
  padding: 2vw;
  width: 100%;
  height: 100%;
`;

import styled from 'styled-components';

//HB = Header bar
//NB = Nav Bar
//CT = content

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template-rows: 80px auto;
  grid-template-columns: min-content auto;

  grid-template-areas:
    'HB HB'
    'NB CT';

  @media screen and (max-width: 700px) {
    grid-template-rows: 55px auto;
  }
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
export const Content = styled.main`
  grid-area: CT;

  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 2vw;

  max-height: calc(100vh - 80px);
  overflow: auto;
`;

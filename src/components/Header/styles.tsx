import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4%;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  background-color: var(--primary-color);
  box-shadow: 0px 5px 10px 2px var(--blackLighter);
`;

export const LogoImg = styled.img`
  height: 70%;
`;

export const Title = styled.h1`
  color: var(--grayLight);
  font-size: calc(15px + 3vw);
  padding: 0 2%;
  text-shadow: 0px 5px 10px black;
`;

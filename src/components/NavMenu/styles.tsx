import styled, { css } from 'styled-components';

export const NavDiv = styled.nav`
  padding: 1vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--grayMedium);
  border-right: 5px groove;
`;

export const NavButton = styled.a`
  padding: 1vh 0.5vw;
  margin: 0 0.5vw;
  display: flex;
  align-items: center;

  &:hover {
    ${(Active) =>
      Active
        ? css`
            border-radius: 20px;
            background-color: var(--bg-color);
            transition: linear 200ms;
          `
        : css``}
  }
`;
export const NavImg = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px var(--blackLighter);
`;

export const NavText = styled.h3`
  padding-left: 1vw;
`;

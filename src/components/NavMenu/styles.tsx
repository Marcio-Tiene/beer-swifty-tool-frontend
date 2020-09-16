import styled, { css } from 'styled-components';
import anterior from '../../assets/img/anterior.svg';
import proximo from '../../assets/img/proximo.svg';

interface Props {
  active?: boolean;
}

export const NavDiv = styled.nav`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--grayMedium);
  border-right: 5px groove;

  @media screen and (max-width: 700px) {
    padding: 10px 0;
  }
`;

export const NavButton = styled.a`
  padding: 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  transition: linear 500ms;
  cursor: pointer;
  &:hover {
    ${(p: Props) =>
      p.active
        ? css`
            background-color: var(--bg-color);
          `
        : css``}
  }
  @media screen and (max-width: 700px) {
    padding: 5px;
    margin: 0 2px;
  }
`;
export const NavImg = styled.img`
  width: 65px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px var(--blackLighter);
  transition: linear 300ms;

  &:hover {
    ${(p: Props) =>
      !p.active
        ? css`
            border-radius: 25%;
          `
        : css``}
  }
  @media screen and (max-width: 700px) {
    width: 40px;
  }
`;

export const NavText = styled.h3`
  padding-left: 1vw;
`;

export const ExpandButton = styled.span`
  content: '';
  background-color: white;
  border: 1px solid black;

  ${(p: Props) =>
    p.active
      ? css`
          background-image: url(${anterior});
        `
      : css`
          background-image: url(${proximo});
        `}

  cursor: pointer;

  position: fixed;
  bottom: 2vw;
  flex-basis: flex-end;
  align-self: center;
  align-content: flex-end;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px var(--blackLighter);
  transition: linear 300ms;

  &:hover {
    box-shadow: 0px 0px 5px 5px black;
  }
`;
export const NavExpandText = styled.h3`
  color: white;
  text-align: center;
`;

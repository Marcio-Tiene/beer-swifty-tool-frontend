import styled, { css } from 'styled-components';
import previous from '../../assets/img/previous.svg';
import next from '../../assets/img/next.svg';

interface Props {
  active: boolean;
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
  background-color: white;
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
  color: white;
  text-shadow: 0px 5px 10px black;
  width: 200px;
`;

export const ExpandButton = styled.span`
  ${(p: Props) =>
    p.active
      ? css`
          background: white url(${previous}) center/ 100%;
        `
      : css`
          background: white url(${next}) center/ 100%;
        `}

  cursor: pointer;

  position: fixed;
  bottom: 2vw;
  align-self: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px #00000029;
  transition: linear 100ms;

  &:hover {
    opacity: 0.7;
  }
`;
export const NavExpandText = styled.h3`
  color: white;
  text-align: center;
`;

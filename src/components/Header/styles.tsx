import styled from 'styled-components';

export const HeaderDiv = styled.div`
  background: #f29f05 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 0px #00000029;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4%;
  width: 100%;
  height: 100%;

  background-color: var(--primary-color);
`;

export const LogoImg = styled.img`
  height: 120px;
  padding: 30px;

  @media screen and (max-width: 700px) {
    height: 45px;
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  color: var(--grayLight);
  font-size: 3rem;
  padding: 0 1rem;
  text-shadow: 0px 5px 10px black;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
`;

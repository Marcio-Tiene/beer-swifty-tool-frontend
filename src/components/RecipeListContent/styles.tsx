import styled from 'styled-components';

// RL = Recipe List
// RI = Recipe info card

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 471px;

  grid-template-areas: 'RL RI';
`;

export const RecipeListPageDiv = styled.div`
  grid-area: RL;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecipeListPageCard = styled.div`
  height: 128px;
  width: 90%;
  display: flex;
  box-shadow: 0px 4px 16px #0000003d;
  border: 1px solid #f29f05;
  margin: 16px 0;

  border-radius: 16px;

  opacity: 0.5;
  transition:  linear 200ms;
  }
  &:hover{

    opacity:1;
`;

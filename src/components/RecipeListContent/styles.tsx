import styled from 'styled-components';

interface Props {
  BgImg: string;
}

// RL = Recipe List
// RI = Recipe info card

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0%;

  grid-template-areas: 'RL RI';
`;

export const RecipeListPageDiv = styled.div`
  grid-area: RL;
  display: flex;
  width: 100%;

  max-height: 100%;
  flex-direction: column;

  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }
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
  transition: linear 200ms;

  &:hover {
    opacity: 1;
  }
`;

export const RecipeInfoBaner = styled.div`
  grid-area: RI;
  height: 100%;
  width: 100%;
`;

export const Span = styled.span`
  content: '';
  background-image: url(${(p: Props) => p.BgImg});
  background-size: 190px auto;
  background-position: center;
  background-repeat: no-repeat;

  height: 126px;
  min-width: 143px;
  border-radius: 16px 0 0 16px;

  overflow: hidden;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 365px;
  padding: 22px 10px;
`;

export const Desc = styled.div`
  display: flex;
  /* align-items: center; */
  text-align: justify;

  margin: 10px 0;
  /* /* padding-top: 22px; */
  padding-right: 10px;
  width: 50%;
  overflow-y: scroll;
  height: 80%;

  ::-webkit-scrollbar {
    max-height: 2px;
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }
`;

export const RecipeAtt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 33%;
  height: 100%;

  padding: 10px 10px;
`;

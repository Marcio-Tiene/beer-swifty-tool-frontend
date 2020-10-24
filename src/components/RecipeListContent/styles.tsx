import styled from 'styled-components';

interface Props {
  BgImg: string;
}
interface PropsA {
  isActive: boolean;
}

// RL = Recipe List
// RI = Recipe info card

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 471px;

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

  .divTittle {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .tittle {
    font: normal normal normal 32px/43px Segoe UI;
    text-align: left;

    margin-bottom: 13px;
  }

  .subtittle {
    display: flex;
    width: 90%;
    p {
      padding-right: 25px;
    }
  }

  h1 {
    text-align: left;
    font: normal normal normal 24px/32px Segoe UI;
    letter-spacing: 0px;
  }

  p {
    text-align: left;
    font-size: 16px;
    line-height: 21px;

    color: #707070;
  }

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

  opacity: ${(p: PropsA) => (p.isActive ? 1 : 0.5)};
  transition: linear 200ms;

  &:hover {
    opacity: 1;
  }
`;

export const RecipeInfoBaner = styled.div`
  grid-area: RI;
  align-self: center;
  justify-self: right;
  height: 90%;
  width: 90%;
  box-shadow: 0px 4px 16px #0000003d;
  /* border: 1px solid black; */
  border-radius: 16px;
`;

export const Span = styled.span`
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

  margin: 10px 0;
  /* /* padding-top: 22px; */
  padding-right: 10px;
  width: 50%;
  overflow: hidden;
  height: 80%;
  p {
    text-align: justify;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const RecipeAtt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 33%;
  height: 100%;

  padding: 10px 10px;

  h3 {
    width: 33%;
    color: #592b02;
  }

  .attributes {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  .rating {
    display: flex;
    justify-content: space-evenly;
    height: fit-content;
    width: 100%;
  }
`;

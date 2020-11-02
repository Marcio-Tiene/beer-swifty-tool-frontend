import styled from 'styled-components';

interface Props {
  BgImg: string;
}
interface Acitive {
  isActive: boolean;
}

// RL = Recipe List
// RI = Recipe info card

export const Wrapper = styled.main`
  width: 100%;
  max-width: 100%;
  max-height: 100%;

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

  .divTittle {
    width: 90%;

    display: flex;
    justify-content: space-between;
  }

  .tittle {
    font-size: 32px;
    line-height: 43px;
    text-align: left;

    margin-bottom: 13px;
  }

  .subtittle {
    display: flex;
    width: 100%;
    p {
      padding-right: 25px;
    }
  }
`;

export const RecipeBannerContainer = styled.div`
  height: 78vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
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
  box-shadow: ${(p: Acitive) =>
    p.isActive ? '0px 4px 32px #00000029' : '0px 0px 4px #00000029'};
  border: ${(p: Acitive) => (p.isActive ? '1px solid #f29f05' : 'none')};
  margin: 16px 0;

  border-radius: 16px;

  opacity: ${(p: Acitive) => (p.isActive ? 1 : 0.6)};
  transition: linear 200ms;

  &:hover {
    opacity: 1;
    box-shadow: 0px 4px 16px #0000003d;
  }
`;

export const RecipeInfoBaner = styled.div`
  grid-area: RI;
  align-self: flex-start;
  justify-self: right;

  max-height: 85vh;
  width: 90%;
  max-width: 90%;
  box-shadow: 0px 4px 16px #0000003d;

  border-radius: 16px;

  overflow-y: scroll;

  transition: linear 0.2s;

  .info-card-title {
  }

  .rating-container {
    padding: 11px 23px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }
  .title-container {
    padding: 11px 23px 5px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }

  &:hover {
    box-shadow: 0px 4px 32px #0000003d;
  }
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

  margin: 10px 0;

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

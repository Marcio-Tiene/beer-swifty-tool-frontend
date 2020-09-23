import styled from 'styled-components';

const DashBoardDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 920px) {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.h1`
  width: 1256px;
  /* padding-left: 120px; */
`;
export const UcImg = styled.img`
  height: calc(337px - 18%);
  width: 100%;
  padding: 0 30%;
`;
export default DashBoardDiv;

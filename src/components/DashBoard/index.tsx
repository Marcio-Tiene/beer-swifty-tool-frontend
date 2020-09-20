import styled from 'styled-components';

const Dasboard = styled.div`
  width: 100%;
  height: 90%;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 920px) {
    width: 100%;
    height: 95%;
  }
`;

export default Dasboard;

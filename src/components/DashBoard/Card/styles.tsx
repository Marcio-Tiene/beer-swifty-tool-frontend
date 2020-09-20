import styled from 'styled-components';

interface Props {
  BgTitle?: string;
}

export const CardWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 8px #00000029;
  border-radius: 16px;

  margin: 2% 1% 0%;

  height: 339px;
  flex: 1 1 628px;
  flex: 0 1 628px;
`;

export const CardHeader = styled.header`
  background-color: ${(p: Props) => p.BgTitle};
  display: flex;
  /* justify-content: space-around; */
  align-items: center;

  height: 18%;
  width: 100%;

  border-radius: 16px 16px 0 0;
`;

export const CardTitle = styled.h3`
  color: white;
  line-height: 100%;
  padding: 0 2%;
  width: 33%;
`;

export const CardTitleInf = styled.p`
  font-size: 0.7rem;
  color: white;
  line-height: 100%;
  padding: 0 2%;
  width: 33%;
`;

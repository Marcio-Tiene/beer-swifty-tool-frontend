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

export const CardTitle = styled.header`
  background-color: ${(p: Props) => p.BgTitle};
  height: 18%;
  width: 100%;

  border-radius: 16px 16px 0 0;
`;

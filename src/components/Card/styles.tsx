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
  cursor: pointer;
  overflow: hidden;
  transition: linear 0.2s;
  &:hover {
    box-shadow: 0px 0px 32px #00000042;
  }
`;

export const CardHeader = styled.header`
  background-color: ${(p: Props) => p.BgTitle};
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 18%;
  width: 100%;

  border-radius: 16px 16px 0 0;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  color: white;
  line-height: 100%;
  padding: 0 2%;
  width: fit-content;
`;

export const CardTitleInf = styled.p`
  font-size: 16px;
  line-height: 21px;

  color: white;
  line-height: 100%;
  padding: 0 2%;
  width: fit-content;
`;

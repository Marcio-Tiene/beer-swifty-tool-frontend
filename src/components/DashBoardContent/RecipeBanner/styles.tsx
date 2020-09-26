import styled from 'styled-components';

interface Props {
  BgImg: string;
}

export const DashBoardRecipeCard = styled.div`
  display: flex;
  height: 27.3333333%;
  width: 100%;
  /* align-items: flex-end; */
  justify-content: space-around;
  padding: 1% 2%;
  box-shadow: 0px 0px 2px #00000029;
  opacity: 0.9;
  transition: linear 200ms;
    }

  &:hover{
    opacity:1;
  
`;

export const DivName = styled.div`
  width: 50%;
  padding-left: 1%;
`;

export const Span = styled.span`
  content: '';
  background-image: url(${(p: Props) => p.BgImg});
  background-size: auto 70px;
  background-position: center;
  background-repeat: no-repeat;

  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  align-self: center;
`;

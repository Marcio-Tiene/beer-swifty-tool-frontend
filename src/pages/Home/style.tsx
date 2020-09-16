import styled from 'styled-components';
import Logo from '../../assets/img/Logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Hello = styled.h1`
  align-self: center;
`;

export const Span = styled.span`
  content: '';
  background-image: url(${Logo});
  width: 200px;
  height: 300px;
`;

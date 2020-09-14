import styled from 'styled-components';

export const Error = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToHome = styled.button`
  margin-top: 3vw;
  background-color: var(--tertiary-color);
  color: white;
  border-radius: 8px;
  border: none;
  min-width: 135px;
  min-height: 40.5px;
  width: 10vw;
  height: 3vw;
  transition: linear 300ms;
  &:hover {
    background-color: var(--bg-color);
    color: var(--tertiary-color);
    border: 2px solid var(--tertiary-color);
    transition: linear 300ms;
  }
`;

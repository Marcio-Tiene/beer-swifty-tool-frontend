import React from 'react';
import { useHistory } from 'react-router';
import { Error, ToHome } from './style';

const Error404: React.FC = () => {
  let history = useHistory();

  function HandleClick() {
    history.goBack();
  }

  return (
    <Error>
      <h1>Error 404: Page not Found</h1>
      <ToHome onClick={HandleClick}>Go Back</ToHome>
    </Error>
  );
};

export default Error404;

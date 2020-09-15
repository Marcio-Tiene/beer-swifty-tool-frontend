import React from 'react';

import PageDefault from '../../components/PageDefault/indext';
import { Container, Hello } from './style';

const Home: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <Hello>Hello World</Hello>
      </Container>
    </PageDefault>
  );
};

export default Home;

import React from 'react';
import Dashboard from '../../components/DashBoard';

import PageDefault from '../../components/PageDefault/';

const Home: React.FC = () => {
  return (
    <PageDefault>
      {/* <Container> */}
      <Dashboard />
      {/* </Container> */}
    </PageDefault>
  );
};

export default Home;

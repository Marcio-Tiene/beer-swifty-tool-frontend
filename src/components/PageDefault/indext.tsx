import React from 'react';
import Header from '../Header';
import NavMenu from '../NavMenu';

import { Grid, HeaderBar, NavBar, Content } from './styles';

const PageDefault: React.FC = ({ children }) => {
  return (
    <Grid>
      <HeaderBar>
        <Header />
      </HeaderBar>
      <NavBar>
        <NavMenu />
      </NavBar>
      <Content>{children}</Content>
    </Grid>
  );
};

export default PageDefault;

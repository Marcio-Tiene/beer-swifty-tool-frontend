import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './config/serviceWorker';

import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Error404 from './pages/Error404';
import Recipes from './pages/Recipes';
import EditRecipe from './pages/EditRecipe';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/recipes' component={Recipes} exact />
        <Route path='/recipes/:id' component={EditRecipe} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

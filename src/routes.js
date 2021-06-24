import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={['/', 'home']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export { Routes };

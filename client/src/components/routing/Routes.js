import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../routing/PrivateRoute';

import History from '../../pages/history/History';
import NotFound from '../layout/NotFound';
import Home from '../../pages/home/Home';

const Routes = () => {
  return (
    <section>
      <Switch>
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/history' component={History} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

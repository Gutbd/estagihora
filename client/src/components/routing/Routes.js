import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../routing/PrivateRoute";

import Dashboard from "../dashboard/Dashboard";
import History from "../history/History";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section>
      <Switch>
        <PrivateRoute exact path='/home' component={Dashboard} />
        <PrivateRoute exact path='/history' component={History} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

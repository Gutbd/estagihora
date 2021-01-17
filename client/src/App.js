import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

import Landing from './pages/landing/Landing';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

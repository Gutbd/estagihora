import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isSignedIn } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isSignedIn ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default connect()(PrivateRoute);

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';

const Landing = () => {
  const { isSignedIn, showSignIn, showSignUp } = useSelector(
    (state) => state.auth
  );

  if (isSignedIn) {
    return <Redirect to='/home' />;
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <h1>EstagiHora</h1>
      </Grid>

      <Grid item>
        {showSignIn && <SignIn />}
        {showSignUp && <SignUp />}
      </Grid>
    </Grid>
  );
};

export default connect()(Landing);

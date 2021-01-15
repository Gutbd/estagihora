import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import Login from "../auth/Login";
import Register from "../auth/Register";

const Home = ({ isAuthenticated, toggleRegisterLogin }) => {
  // If user is authenticated go to dashboard (home)
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <h1>EstagiHora</h1>
      </Grid>

      <Grid item>
        {toggleRegisterLogin && <Login />}
        {!toggleRegisterLogin && <Register />}
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
  toggleRegisterLogin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  toggleRegisterLogin: state.auth.toggleRegisterLogin,
});

export default connect(mapStateToProps)(Home);

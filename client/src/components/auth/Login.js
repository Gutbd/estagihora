import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import { toggleConnect, login } from "../../actions/auth";

const Login = ({ toggleConnect, login, errors, loading }) => {
  // Loading handler
  const [isLoading, setLoading] = useState(false);

  // Form handles
  const [formData, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (newValue) => {
    setState(newValue);
  };

  // On submit
  const onSubmitLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    login(formData.email, formData.password);
    setLoading(false);
  };

  // Toggle to register
  const toggleRegister = () => {
    toggleConnect();
  };

  return (
    <Container>
      <form onSubmit={(e) => onSubmitLogin(e)} noValidate>
        <Grid container direction='row' alignItems='center'>
          <Grid item>
            <p>Bem vindo estagiário, faça seu login:</p>
          </Grid>
        </Grid>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='email'
                label='E-mail'
                name='email'
                autoComplete='email'
                onChange={(e) =>
                  handleChange({ ...formData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                name='password'
                label='Senha'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) =>
                  handleChange({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
          {errors &&
            errors.map((error, index) => (
              <Grid item xs={12} key={index}>
                <span className='message-error'> {error.msg} </span>
              </Grid>
            ))}
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isLoading && loading}
              size='large'
            >
              {" "}
              Entrar!{" "}
            </Button>
          </Grid>
          <Grid item className='small-text'>
            <a
              href='#!'
              onClick={() => toggleRegister()}
              className='text-dark '
            >
              Não tem cadatro? Registre-se!
            </a>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Login.propTypes = {
  toggleConnect: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { toggleConnect, login })(Login);

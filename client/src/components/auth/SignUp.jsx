import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import { signUpRequest, showSignIn } from '../../store/modules/auth/actions';

const SignUp = ({ showSignIn, signUpRequest }) => {
  const { loadingSignUpRequest, errors } = useSelector((state) => state.auth);

  const [formData, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (newValue) => {
    setState(newValue);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    signUpRequest(formData);
  };

  const toggleToSignIn = () => {
    showSignIn();
  };

  return (
    <Container>
      <form onSubmit={(e) => onSubmitLogin(e)} noValidate>
        <Grid container direction='row' alignItems='center'>
          <Grid item>
            <p>Bem vindo estagiário, registre-se:</p>
          </Grid>
        </Grid>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='name'
                label='Nome'
                name='name'
                autoComplete='name'
                onChange={(e) =>
                  handleChange({ ...formData, name: e.target.value })
                }
              />
            </Grid>
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
              disabled={loadingSignUpRequest}
              size='large'
            >
              {loadingSignUpRequest ? 'Carregando' : 'Cadastrar'}
            </Button>
          </Grid>
          <Grid item className='small-text'>
            <a
              href='#!'
              onClick={() => toggleToSignIn()}
              className='text-dark '
            >
              Já tem cadatro? Faça login!
            </a>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

SignUp.propTypes = {
  showSignIn: PropTypes.func.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};

export default connect(null, { showSignIn, signUpRequest })(SignUp);

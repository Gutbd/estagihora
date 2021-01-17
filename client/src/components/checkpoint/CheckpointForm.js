import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

import { registerCheckpointRequest } from '../../store/modules/checkpoint/actions';

const CheckpointForm = ({ registerCheckpointRequest }) => {
  const { loading } = useSelector((state) => state.checkpoint);

  const onSubmitCheckpoint = (e) => {
    e.preventDefault();
    registerCheckpointRequest();
  };

  return (
    <Container className='form-container'>
      <form onSubmit={(e) => onSubmitCheckpoint(e)} noValidate>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={loading}
              size='large'
            >
              {' '}
              Bater ponto!{' '}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

CheckpointForm.propTypes = {
  registerCheckpointRequest: PropTypes.func.isRequired,
};

export default connect(null, { registerCheckpointRequest })(CheckpointForm);

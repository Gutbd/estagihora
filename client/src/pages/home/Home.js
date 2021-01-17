import React, { useEffect, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import Checkpoints from '../../components/checkpoint/Checkpoints';
import CheckpointInfo from '../../components/checkpoint/CheckpointInfo';
import CheckpointForm from '../../components/checkpoint/CheckpointForm';
import ErrorMessages from '../../components/layout/ErrorMessages';

import { loadUserRequest } from '../../store/modules/user/actions';

const Home = ({ loadUserRequest }) => {
  useEffect(() => {
    loadUserRequest();
  }, [loadUserRequest]);

  const { loading } = useSelector((state) => state.user);

  return (
    <Container>
      {loading ? (
        <Grid container item justify='center' alignItems='center'>
          <CircularProgress />
        </Grid>
      ) : (
        <Fragment>
          <ErrorMessages />
          <CheckpointInfo />
          <div className='dashboard-welcome-text'>Suas batidas de hoje:</div>
          <Checkpoints onlyToday={true} />
          <CheckpointForm />
        </Fragment>
      )}
    </Container>
  );
};

Home.propTypes = {
  loadUserRequest: PropTypes.func.isRequired,
};

export default connect(null, { loadUserRequest })(Home);

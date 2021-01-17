import React, { useEffect, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import CheckpointList from './CheckpointsList';

import { loadCheckpointsTodayRequest } from '../../store/modules/checkpoint/actions';

const CheckpointsToday = ({ loadCheckpointsTodayRequest }) => {
  const { loading, checkpointList } = useSelector((state) => state.checkpoint);

  useEffect(() => {
    loadCheckpointsTodayRequest();
  }, [loadCheckpointsTodayRequest]);

  return (
    <Fragment>
      {loading ? (
        <Grid container item justify='center' alignItems='center'>
          <CircularProgress />
        </Grid>
      ) : (
        <CheckpointList checkpointList={checkpointList} />
      )}
    </Fragment>
  );
};

CheckpointsToday.propTypes = {
  loadCheckpointsTodayRequest: PropTypes.func.isRequired,
};

export default connect(null, { loadCheckpointsTodayRequest })(CheckpointsToday);

import React, { useEffect, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import CheckpointList from './CheckpointsList';

import { loadCheckpointsRequest } from '../../store/modules/checkpoint/actions';

const CheckpointsHistory = ({ loadCheckpointsRequest }) => {
  const { loading, checkpointList } = useSelector((state) => state.checkpoint);

  useEffect(() => {
    loadCheckpointsRequest();
  }, [loadCheckpointsRequest]);

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

CheckpointsHistory.propTypes = {
  loadCheckpointsRequest: PropTypes.func.isRequired,
};

export default connect(null, { loadCheckpointsRequest })(CheckpointsHistory);

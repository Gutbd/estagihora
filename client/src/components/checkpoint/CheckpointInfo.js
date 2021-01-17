import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';

import { hasCheckpointPendentDay } from '../../utils/checkpointUtils';

import AlertMessage from '../layout/AlertMessage';

const CheckpointInfo = () => {
  const { checkpointList } = useSelector((state) => state.checkpoint);

  return (
    <Fragment>
      {hasCheckpointPendentDay(checkpointList) && (
        <AlertMessage type='warning' text='Você tem batidas ímpares' />
      )}
    </Fragment>
  );
};

export default connect()(CheckpointInfo);

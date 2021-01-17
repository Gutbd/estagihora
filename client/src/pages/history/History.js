import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Checkpoints from '../../components/checkpoint/Checkpoints';
import CheckpointInfo from '../../components/checkpoint/CheckpointInfo';

const History = () => {
  return (
    <Fragment>
      <CheckpointInfo />
      <div className='dashboard-welcome-text'>Histórico de batidas:</div>
      <Checkpoints />
    </Fragment>
  );
};

export default connect()(History);

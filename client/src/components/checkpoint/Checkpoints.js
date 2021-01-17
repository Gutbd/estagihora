import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CheckpointsToday from './CheckpointsToday';
import CheckpointsHistory from './CheckpointsHistory';

const Checkpoint = ({ onlyToday }) => {
  return onlyToday ? <CheckpointsToday /> : <CheckpointsHistory />;
};

Checkpoint.propTypes = {
  onlyToday: PropTypes.bool,
};

export default connect()(Checkpoint);

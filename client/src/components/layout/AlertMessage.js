import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MuiAlert from '@material-ui/lab/Alert';

const AlertMessage = ({ type, text }) => {
  return (
    <MuiAlert elevation={6} variant='filled' severity={type}>
      {text}
    </MuiAlert>
  );
};

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect()(AlertMessage);

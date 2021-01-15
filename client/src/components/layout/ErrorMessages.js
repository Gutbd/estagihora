import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AlertMessages from './AlertMessage';

const ErrorMessages = ({ errors }) => {
  return (
    <Fragment>
      {errors &&
        errors.map((error, index) => (
          <AlertMessages key={index} type='error' text={error.msg} />
        ))}
    </Fragment>
  );
};

export default connect()(ErrorMessages);

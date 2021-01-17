import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';

import AlertMessages from './AlertMessage';

const ErrorMessages = () => {
  const { errors } = useSelector((state) => state.checkpoint);
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

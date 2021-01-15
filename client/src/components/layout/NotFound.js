import React, { Fragment } from "react";

import { Grid } from "@material-ui/core";

const NotFound = () => {
  return (
    <Fragment>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className='p-2 pt-5'
      >
        <Grid>
          <h1>Página não encontrada =[</h1>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NotFound;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import {
  registerCheckpoint,
  loadUserCheckpoints,
} from "../../actions/checkpoint";
import { loadUser } from "../../actions/auth";

const CheckpointForm = ({
  registerCheckpoint,
  checkpoint: { loading: checkpointLoading },
  loadUser,
}) => {
  // Loading handler
  const [isLoading, setLoading] = useState(false);

  // On submit
  const onSubmitCheckpoint = (e) => {
    e.preventDefault();

    setLoading(true);
    registerCheckpoint();
    setLoading(false);
  };

  return (
    <Container className='form-container'>
      <form onSubmit={(e) => onSubmitCheckpoint(e)} noValidate>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isLoading || checkpointLoading}
              size='large'
            >
              {" "}
              Bater ponto!{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

CheckpointForm.propTypes = {
  checkpoint: PropTypes.object.isRequired,
  loadUserCheckpoints: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  registerCheckpoint: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkpoint: state.checkpoint,
});

export default connect(mapStateToProps, {
  registerCheckpoint,
  loadUserCheckpoints,
  loadUser,
})(CheckpointForm);

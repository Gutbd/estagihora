import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

import { registerCheckpoint } from "../../actions/checkpoint";
import { loadUser } from "../../actions/auth";

const CheckpointHistory = ({ registerCheckpoint, checkpoint, loadUser }) => {
  // Load user
  useEffect(() => {
    loadUser();
  }, []);

  // Loading handler
  const [isLoading, setLoading] = useState(false);

  // Errors handler
  let errors = checkpoint && checkpoint.errors;

  // On submit
  const onSubmitCheckpoint = (e) => {
    e.preventDefault();

    setLoading(true);
    registerCheckpoint();
    setLoading(false);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmitCheckpoint(e)} noValidate>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <ul>
            {checkpoint &&
              checkpoint.checkpointList.map((check, index) => (
                <li key={index}>
                  {format(
                    parseISO(check.date),
                    "'Dia' dd 'de' MMMM', às ' HH:mm:ss",
                    { locale: pt }
                  )}
                </li>
              ))}
          </ul>
        </Grid>
        <Grid container direction='column' alignItems='center' spacing={2}>
          {errors &&
            errors.map((error, index) => (
              <Grid item xs={12} key={index}>
                <span className='message-error'> {error.msg} </span>
              </Grid>
            ))}
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isLoading || (checkpoint && checkpoint.loading)}
              size='large'
            >
              {" "}
              Bater ponto!{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

CheckpointHistory.propTypes = {
  checkpoint: PropTypes.object,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkpoint: state.checkpoint,
});

export default connect(mapStateToProps, {
  registerCheckpoint,
  loadUser,
})(CheckpointHistory);

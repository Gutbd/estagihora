import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import Checkpoints from "../checkpoint/Checkpoints";
import CheckpointInfo from "../checkpoint/CheckpointInfo";
import CheckpointForm from "../checkpoint/CheckpointForm";
import ErrorMessages from "../layout/ErrorMessages";

import { loadUser } from "../../actions/auth";

const Dashboard = ({ user, loadUser }) => {
  // Load user
  useEffect(() => {
    loadUser();
  }, []);

  // Checkpoint list handler
  const [checkpointList, setCheckpointList] = React.useState([]);
  const handleCheckpointList = (checkPList) => {
    setCheckpointList(checkPList);
  };

  // Form errors handler
  const [formErrors, setFormErrors] = React.useState([]);
  const handleFormErrors = (errors) => {
    setFormErrors(errors);
  };

  return (
    <Container>
      {user && user.loading ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <ErrorMessages errors={formErrors} />
          <CheckpointInfo checkpointList={checkpointList} />
          <div className='dashboard-welcome-text'>Suas batidas de hoje:</div>
          <Checkpoints
            onlyToday={true}
            onChangeCheckpointList={handleCheckpointList}
            onChangeErrors={handleFormErrors}
          />
          <CheckpointForm />
        </Fragment>
      )}
    </Container>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);

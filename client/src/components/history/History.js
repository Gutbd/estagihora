import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Checkpoints from "../checkpoint/Checkpoints";
import CheckpointInfo from "../checkpoint/CheckpointInfo";

import { loadUser } from "../../actions/auth";

const History = ({ user, loadUser }) => {
  // Load user
  useEffect(() => {
    loadUser();
  }, []);

  // Checkpoint list handler
  const [checkpointList, setCheckpointList] = React.useState([]);
  const handleCheckpointList = (checkPList) => {
    setCheckpointList(checkPList);
  };

  return (
    <Fragment>
      <CheckpointInfo checkpointList={checkpointList} />
      <div className='dashboard-welcome-text'>Histórico de batidas:</div>
      <Checkpoints onChangeCheckpointList={handleCheckpointList} />
    </Fragment>
  );
};

History.propTypes = {
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(History);

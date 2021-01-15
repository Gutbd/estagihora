import axios from "axios";

import {
  CHECKPOINT_SEND_SUCCESS,
  CHECKPOINT_SEND_FAIL,
  CHECKPOINT_LOAD_SUCCESS,
  CHECKPOINT_LOAD_FAIL,
} from "./types";

import setAuthToken from "../services/AuthService";

// Register a user checkpoint
export const registerCheckpoint = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.post("/api/checkpoint");

    dispatch({
      type: CHECKPOINT_SEND_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response ? err.response.data.errors : null;

    dispatch({
      type: CHECKPOINT_SEND_FAIL,
      payload: errors,
    });
  }
};

// Load User checkpoint history
export const loadUserCheckpoints = (onlyToday = false) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = onlyToday
      ? await axios.get("api/checkpoint/today")
      : await axios.get("api/checkpoint");

    dispatch({
      type: CHECKPOINT_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response ? err.response.data.errors : null;

    dispatch({
      type: CHECKPOINT_LOAD_FAIL,
      payload: errors,
    });
  }
};

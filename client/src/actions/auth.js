import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  toggle_CONNECT,
} from "./types";

import setAuthToken from "../services/AuthService";

// Call API to Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    dispatch({
      type: AUTH_ERROR,
      payload: errors,
    });
  }
};

// Call API to make a user registration
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    dispatch({
      type: REGISTER_FAIL,
      payload: errors,
    });
  }
};

// Call API to make a user Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;

    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// Logout user
export const logout = () => (dispatch) => {
  setAuthToken(null);
  dispatch({ type: LOGOUT });
};

// Toggle login <-> register
export const toggleConnect = () => (dispatch) => {
  dispatch({ type: toggle_CONNECT });
};

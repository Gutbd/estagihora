import {
  CHECKPOINT_SEND_SUCCESS,
  CHECKPOINT_SEND_FAIL,
  CHECKPOINT_LOAD_SUCCESS,
  CHECKPOINT_LOAD_FAIL,
} from "../actions/types";

const initialState = {
  loading: true,
  checkpointList: [],
  errors: [],
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHECKPOINT_SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        checkpointList: payload,
      };
    case CHECKPOINT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        checkpointList: payload,
      };
    case CHECKPOINT_SEND_FAIL:
    case CHECKPOINT_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}

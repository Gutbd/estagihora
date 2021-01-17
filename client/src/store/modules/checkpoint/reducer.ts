import { CheckpointState, CheckpointAction } from './types';

const initialState: CheckpointState = {
  checkpointList: [],
  loading: true,
  errors: [],
};

export default function user(
  state = initialState,
  action: CheckpointAction
): CheckpointState {
  switch (action.type) {
    case '@checkpoint/LOAD_CHECKPOINTS_TODAY_REQUEST':
    case '@checkpoint/LOAD_CHECKPOINTS_REQUEST':
    case '@checkpoint/REGISTER_CHECKPOINT_REQUEST':
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case '@checkpoint/REGISTER_CHECKPOINT_SUCCESS':
    case '@checkpoint/LOAD_CHECKPOINTS_SUCCESS':
      return {
        ...state,
        loading: false,
        errors: [],
        checkpointList: action.payload.checkpointList,
      };
    case '@checkpoint/REGISTER_CHECKPOINT_FAILURE':
    case '@checkpoint/LOAD_CHECKPOINTS_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };

    default:
      return state;
  }
}

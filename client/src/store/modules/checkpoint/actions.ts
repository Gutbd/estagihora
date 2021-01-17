import { action } from 'typesafe-actions';

export function loadCheckpointsTodayRequest() {
  return action('@checkpoint/LOAD_CHECKPOINTS_TODAY_REQUEST');
}
export function loadCheckpointsRequest() {
  return action('@checkpoint/LOAD_CHECKPOINTS_REQUEST');
}

export function loadCheckpointsSuccess({
  checkpointList,
}: {
  checkpointList: [];
}) {
  return action('@checkpoint/LOAD_CHECKPOINTS_SUCCESS', { checkpointList });
}

export function loadCheckpointsFailure({ errors }: { errors: [] }) {
  return action('@checkpoint/LOAD_CHECKPOINTS_FAILURE', { errors });
}

export function registerCheckpointRequest() {
  return action('@checkpoint/REGISTER_CHECKPOINT_REQUEST');
}

export function registerCheckpointSuccess({
  checkpointList,
}: {
  checkpointList: [];
}) {
  return action('@checkpoint/REGISTER_CHECKPOINT_SUCCESS', { checkpointList });
}

export function registerCheckpointFailure({ errors }: { errors: [] }) {
  return action('@checkpoint/REGISTER_CHECKPOINT_FAILURE', { errors });
}

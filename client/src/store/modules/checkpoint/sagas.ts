import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../../services/api';

export function* loadCheckpoints() {
  try {
    const { data } = yield call(api.get, 'checkpoint');
    yield put(actions.loadCheckpointsSuccess({ checkpointList: data }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.loadCheckpointsFailure({ errors }));
  }
}

export function* loadCheckpointsToday() {
  try {
    const { data } = yield call(api.get, 'checkpoint/today');
    yield put(actions.loadCheckpointsSuccess({ checkpointList: data }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.loadCheckpointsFailure({ errors }));
  }
}

export function* registerCheckpointRequest() {
  try {
    const { data } = yield call(api.post, 'checkpoint');
    yield put(actions.registerCheckpointSuccess({ checkpointList: data }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.registerCheckpointFailure({ errors }));
  }
}

export default all([
  takeLatest(
    '@checkpoint/LOAD_CHECKPOINTS_TODAY_REQUEST',
    loadCheckpointsToday
  ),
  takeLatest('@checkpoint/LOAD_CHECKPOINTS_REQUEST', loadCheckpoints),
  takeLatest(
    '@checkpoint/REGISTER_CHECKPOINT_REQUEST',
    registerCheckpointRequest
  ),
]);

import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../../services/api';

export function* loadUser() {
  try {
    const { data } = yield call(api.get, 'auth');
    yield put(actions.loadUserSuccess({ user: data }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.loadUserFailure({ errors }));
  }
}

export default all([takeLatest('@user/LOAD_USER_REQUEST', loadUser)]);

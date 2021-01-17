import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    console.log('signIn');
    const { email, password } = payload;
    const { data } = yield call(api.post, 'auth', {
      email,
      password,
    });
    yield put(actions.signInSuccess({ token: data.token }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.signInFailure({ errors }));
  }
}

export function* signUp({ payload }: ActionType<typeof actions.signUpRequest>) {
  try {
    const { name, email, password } = payload;
    const { data } = yield call(api.post, '/users', {
      name,
      email,
      password,
    });
    yield put(actions.signUpSuccess({ token: data.token }));
  } catch (error) {
    const errors = error.response ? error.response.data.errors : null;
    yield put(actions.signUpFailure({ errors }));
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);

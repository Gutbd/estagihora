import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import checkpoint from './checkpoint/sagas';

export default function* rootSaga() {
  return yield all([auth, user, checkpoint]);
}

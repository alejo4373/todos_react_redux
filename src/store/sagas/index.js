import { all, fork } from 'redux-saga/effects';

import todos from './todos';
import journal from './journal';
import auth from './auth';
import profile from './profile';

function* rootSaga() {
  yield all([
    fork(todos),
    fork(journal),
    fork(auth),
    fork(profile)
  ])
}

export default rootSaga;

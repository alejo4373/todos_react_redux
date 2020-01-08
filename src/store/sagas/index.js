import { all, fork } from 'redux-saga/effects';

import todos from './todos';
import journal from './journal';
import auth from './auth';

function* rootSaga() {
  yield all([
    fork(todos),
    fork(journal),
    fork(auth)
  ])
}

export default rootSaga;

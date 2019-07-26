import { all, fork } from 'redux-saga/effects';

import todos from './todos';
import journal from './journal';

function* rootSaga() {
  yield all([fork(todos), fork(journal)])
}

export default rootSaga;
import { all, fork } from 'redux-saga/effects';

import todos from './todos';

function* rootSaga() {
  yield all([fork(todos)])
}

export default rootSaga;
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  REQUEST_AUTH_LOGIN,
  RECEIVE_AUTH_USER,
  RECEIVE_AUTH_ERROR
} from '../actionTypes'

import * as api from '../../api';

function* loginUser(action) {
  try {
    const { data } = yield call(api.login, action.payload.credentials)
    yield put({
      type: RECEIVE_AUTH_USER,
      payload: { user: data.payload }
    });
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_AUTH_ERROR, error: action.error })
  }
}

function* authSagaWatcher() {
  yield takeEvery(REQUEST_AUTH_LOGIN, loginUser);
}

export default authSagaWatcher;

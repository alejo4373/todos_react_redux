import { call, put, takeEvery } from 'redux-saga/effects';
import {
  REQUEST_AUTH_LOGIN,
  REQUEST_AUTH_SIGNUP,
  RECEIVE_AUTH_USER,
  RECEIVE_AUTH_ERROR
} from '../actionTypes'

import * as api from '../../api';

function* loginUser(action) {
  try {
    const { data } = yield call(api.login, action.payload.credentials)
    yield put({
      type: RECEIVE_AUTH_USER,
      payload: { user: data.payload.user }
    });
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_AUTH_ERROR, error: action.error })
  }
}

function* signupUser(action) {
  try {
    const { data } = yield call(api.signup, action.payload.userInfo)
    yield put({
      type: RECEIVE_AUTH_USER,
      payload: { user: data.payload.user }
    })
  } catch (err) {
    const { message } = err.response.data
    yield put({ type: RECEIVE_AUTH_ERROR, error: message })

  }
}

function* authSagaWatcher() {
  yield takeEvery(REQUEST_AUTH_LOGIN, loginUser);
  yield takeEvery(REQUEST_AUTH_SIGNUP, signupUser);
}

export default authSagaWatcher;

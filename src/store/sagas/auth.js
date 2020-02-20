import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';
import { RESET_STATE } from '../actionTypes/comm'
import {
  RECEIVE_AUTH_USER,
  RECEIVE_AUTH_ERROR,

  REQUEST_AUTH_LOGIN,
  REQUEST_AUTH_SIGNUP,
  REQUEST_AUTH_LOGOUT
} from '../actionTypes/auth'

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

function* logoutUser(action) {
  try {
    yield call(api.logout)
    yield put({ type: RESET_STATE })
  } catch (err) {
    const { message } = err.response.data
    yield put({ type: RECEIVE_AUTH_ERROR, error: message })
  }
}

function* authSagaWatcher() {
  yield takeEvery(REQUEST_AUTH_LOGIN, loginUser);
  yield takeEvery(REQUEST_AUTH_SIGNUP, signupUser);
  yield takeEvery(REQUEST_AUTH_LOGOUT, logoutUser);
}

export default authSagaWatcher;

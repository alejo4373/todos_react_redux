import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';
import { REQUEST_USER, RECEIVE_USER } from '../actionTypes/profile'

function* getUser({ type }) {
  try {
    const { data } = yield call(api.getUser)
    yield put({
      type: RECEIVE_USER,
      payload: { user: data.payload.user }
    })
  } catch (err) {
    console.log('ERROR in getUser saga => ', err)
  }
}

function* profileWatcher() {
  yield takeEvery(REQUEST_USER, getUser)
}

export default profileWatcher;



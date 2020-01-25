import { call, put, takeEvery } from 'redux-saga/effects';
import { RECEIVE_TODO, RECEIVE_ERROR, REQUEST_ADD_TODO } from '../actionTypes'
import * as api from '../../api';

function* addTodo(action) {
  try {
    const { data } = yield call(api.addTodo, action.todo)
    yield put({ type: RECEIVE_TODO, todo: data.payload.todo });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* mySaga() {
  yield takeEvery(REQUEST_ADD_TODO, addTodo)
}

export default mySaga;

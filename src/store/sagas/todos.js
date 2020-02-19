import { call, put, takeEvery } from 'redux-saga/effects';
import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REQUEST_ADD_TODO,
  REQUEST_FETCH_TODOS,
  RECEIVE_ERROR,
} from '../actionTypes'

import * as api from '../../api';

function* addTodo(action) {
  try {
    const { data } = yield call(api.addTodo, action.todo)
    yield put({ type: RECEIVE_TODO, payload: data.payload });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* fetchTodos(action) {
  try {
    const { data } = yield call(api.fetchTodos, action.todo)
    yield put({ type: RECEIVE_TODOS, payload: data.payload });
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_ERROR, error: err });
  }
}

function* mySaga() {
  yield takeEvery(REQUEST_ADD_TODO, addTodo)
  yield takeEvery(REQUEST_FETCH_TODOS, fetchTodos)
}

export default mySaga;

import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as api from '../../api';
import { RECEIVE_ERROR } from '../actionTypes/comm';
import {
  RECEIVE_TODO,
  REMOVE_TODO,
  RECEIVE_TODOS,
  UPDATE_TODO,
  SET_ACTIVE_TODO,

  REQUEST_ADD_TODO,
  REQUEST_UPDATE_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_FETCH_TODOS,
  REQUEST_FETCH_TODO,
} from '../actionTypes/todos'

function* addTodo(action) {
  try {
    const { data } = yield call(api.addTodo, action.todo)
    yield put({ type: RECEIVE_TODO, payload: data.payload });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* updateTodo(action) {
  const { payload } = action
  try {
    const { data } = yield call(api.updateTodo, payload.id, payload.todoUpdates)
    yield put({ type: UPDATE_TODO, payload: data.payload });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* fetchTodos(action) {
  try {
    const { data } = yield call(api.fetchTodos, action.payload)
    yield put({ type: RECEIVE_TODOS, payload: data.payload });
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_ERROR, error: err });
  }
}

function* fetchTodo(action) {
  try {
    const todos = yield select(state => state.todos.todos)
    const todo = todos.find(t => t.id === parseInt(action.id))
    if (todo) {
      yield put({ type: SET_ACTIVE_TODO, payload: { todo } });
    } else {
      const { data } = yield call(api.fetchTodo, action.id)
      yield put({ type: SET_ACTIVE_TODO, payload: data.payload });
    }
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_ERROR, error: err });
  }
}

function* deleteTodo(action) {
  const { payload } = action
  try {
    const { data } = yield call(api.deleteTodo, payload.id)
    yield put({ type: REMOVE_TODO, payload: data.payload });
  } catch (err) {
    console.log(err)
    yield put({ type: RECEIVE_ERROR, error: err });
  }
}

function* todosSagaWatcher() {
  yield takeEvery(REQUEST_ADD_TODO, addTodo)
  yield takeEvery(REQUEST_FETCH_TODOS, fetchTodos)
  yield takeEvery(REQUEST_FETCH_TODO, fetchTodo)
  yield takeEvery(REQUEST_UPDATE_TODO, updateTodo)
  yield takeEvery(REQUEST_DELETE_TODO, deleteTodo)
}

export default todosSagaWatcher;

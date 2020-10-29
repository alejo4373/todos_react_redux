import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';
import { RECEIVE_ERROR } from '../actionTypes/comm';
import {
  RECEIVE_JOURNAL_ENTRY,
  RECEIVE_JOURNAL_ENTRIES,
  RECEIVE_UPDATED_JOURNAL_ENTRY,

  REQUEST_ADD_JOURNAL_ENTRY,
  REQUEST_JOURNAL_ENTRIES,
  REQUEST_UPDATE_JOURNAL_ENTRY,
} from '../actionTypes/journal'

function* addJournalEntry(action) {
  try {
    const { data } = yield call(api.addJournalEntry, action.journalEntry)
    yield put({
      type: RECEIVE_JOURNAL_ENTRY,
      payload: { journalEntry: data.payload }
    });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* fetchJournalEntries(action) {
  try {
    const { data } = yield call(api.fetchJournalEntries, action.payload)
    yield put({
      type: RECEIVE_JOURNAL_ENTRIES,
      payload: { entries: data.payload }
    });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* requestUpdateJournalEntry(action) {
  const { id, updates } = action.payload
  try {
    const { data } = yield call(api.requestUpdateJournalEntry, id, updates)
    yield put({
      type: RECEIVE_UPDATED_JOURNAL_ENTRY,
      payload: { journalEntry: data.payload.updatedEntry }
    });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
}

function* journalSagasWatcher() {
  yield takeEvery(REQUEST_ADD_JOURNAL_ENTRY, addJournalEntry)
  yield takeEvery(REQUEST_JOURNAL_ENTRIES, fetchJournalEntries)
  yield takeEvery(REQUEST_UPDATE_JOURNAL_ENTRY, requestUpdateJournalEntry)
}

export default journalSagasWatcher;

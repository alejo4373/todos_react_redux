import { call, put, takeEvery } from 'redux-saga/effects';
import { RECEIVE_JOURNAL_ENTRY, RECEIVE_ERROR, REQUEST_ADD_JOURNAL_ENTRY } from '../actionTypes'
import * as api from '../../api';

function* addJournalEntry(action) {
  try {
    const { data } = yield call(api.addJournalEntry, action.journalEntry)
    yield put({ type: RECEIVE_JOURNAL_ENTRY, journalEntry: data.payload });
  } catch (err) {
    yield put({ type: RECEIVE_ERROR, error: action.error });
  }
 }

 function* journalSagas() {
   yield takeEvery(REQUEST_ADD_JOURNAL_ENTRY, addJournalEntry)
 }

 export default journalSagas;
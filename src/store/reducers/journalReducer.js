import {
  RECEIVE_JOURNAL_ENTRY,
  RECEIVE_JOURNAL_ENTRIES
} from '../actionTypes/journal';

const journalReducer = (state = {
  entries: []
}, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case RECEIVE_JOURNAL_ENTRY:
      const { journalEntry } = payload
      newState.entries = [journalEntry, ...newState.entries]
      return newState;

    case RECEIVE_JOURNAL_ENTRIES:
      const { entries } = payload;
      newState.entries = entries;
      return newState
    default:
      return newState;
  }
}

export default journalReducer;

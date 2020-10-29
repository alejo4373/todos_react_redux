import {
  RECEIVE_JOURNAL_ENTRY,
  RECEIVE_JOURNAL_ENTRIES,
  RECEIVE_UPDATED_JOURNAL_ENTRY
} from '../actionTypes/journal';

const initialState = {
  entries: []
}

const journalReducer = (state = initialState, { type, payload = {} }) => {
  const newState = { ...state };
  const { journalEntry } = payload
  switch (type) {
    case RECEIVE_JOURNAL_ENTRY:
      newState.entries = [journalEntry, ...newState.entries]
      return newState;

    case RECEIVE_JOURNAL_ENTRIES:
      const { entries } = payload;
      newState.entries = entries;
      return newState

    case RECEIVE_UPDATED_JOURNAL_ENTRY:
      newState.entries = newState.entries.map(entry => {
        if (entry.id === journalEntry.id) {
          return { ...entry, ...journalEntry }
        }
        return entry
      })
      return newState;

    default:
      return newState;
  }
}

export default journalReducer;

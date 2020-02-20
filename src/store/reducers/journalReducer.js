import { 
  RECEIVE_JOURNAL_ENTRY, 
  RECEIVE_JOURNAL_ENTRIES 
} from '../actionTypes/journal';

const journalReducer = (state = {}, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case RECEIVE_JOURNAL_ENTRY:
      const { journalEntry } = payload
      newState[journalEntry.id] = journalEntry
      return newState;

    case RECEIVE_JOURNAL_ENTRIES:
      const { entries } = payload;
      entries.forEach(entry => {
        newState[entry.id] = entry
      })
      return newState;
    default:
      return newState;
  }
}

export default journalReducer;

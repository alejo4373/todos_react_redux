import { RECEIVE_JOURNAL_ENTRY }  from './actionTypes';

const journalReducer = (state = {}, { type, journalEntry }) => {
  const newState = {...state};
  switch (type) {
    case RECEIVE_JOURNAL_ENTRY:
      newState[journalEntry.id] = journalEntry;
      return newState;

    default:
      return newState;
  } 
}

export default journalReducer;

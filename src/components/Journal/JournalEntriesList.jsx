import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntriesList = ({ entries }) => {
  const entriesList = [];

  for (let entry in entries) {
    entriesList.push(
      <JournalEntry
        key={entries[entry].id}
        entry={entries[entry]}
      />
    )
  }

  return (
    <ul>
      {entriesList}
    </ul>
  )
}

export default JournalEntriesList;

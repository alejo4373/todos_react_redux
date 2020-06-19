import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntriesList = ({ entries }) => {
  const entriesList = [];

  for (let entry of entries) {
    entriesList.push(
      <JournalEntry
        key={entry.id}
        entry={entry}
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

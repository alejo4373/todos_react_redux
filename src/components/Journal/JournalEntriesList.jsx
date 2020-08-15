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
    <div>
      <h3>Entries</h3>
      <ul className="list">
        {entriesList}
      </ul>
    </div>
  )
}

export default JournalEntriesList;

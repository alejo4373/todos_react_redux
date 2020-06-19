import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <li className="je-entry-item">
      <div>
        {new Date(entry.ts).toLocaleString()} {entry.text}
        <p>Tags: {entry.tags.join(', ')}</p>
      </div>
    </li>
  )
}

export default JournalEntry;

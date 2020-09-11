import React from 'react';
import { get24HourTimeString } from '../../util';

const JournalEntry = ({ entry }) => {
  const date = new Date(entry.ts)
  const time = get24HourTimeString(date)

  return (
    <li className="entry">
      <span className="entry__date tooltip">
        {time}
        <span className="tooltip__text">{date.toLocaleString()}</span>
      </span>
      <p>{entry.text} </p>
      <p>🏷 {entry.tags.join(', ')}</p>
    </li>
  )
}

export default JournalEntry;

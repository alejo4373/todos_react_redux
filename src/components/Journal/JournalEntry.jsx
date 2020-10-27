import React from 'react';
import { get24HourTimeString } from '../../util';
import '../../styles/JournalEntry.css'
import { MoreMenu } from './MoreMenu';

const JournalEntry = ({ entry }) => {
  const date = new Date(entry.ts)
  const time = get24HourTimeString(date)

  return (
    <li className="entry">
      <MoreMenu />
      <p>{entry.text} </p>
      <div>
        <span className="entry__date tooltip">
          {time}
          <span className="tooltip__text">{date.toLocaleString()}</span>
        </span>
        <p>🏷 {entry.tags.join(', ')}</p>
      </div>

    </li>
  )
}

export default JournalEntry;

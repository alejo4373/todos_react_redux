import React, { useState } from 'react';
import { get24HourTimeString } from '../../util';
import '../../styles/JournalEntry.css'

const JournalEntry = ({ entry }) => {
  const date = new Date(entry.ts)
  const time = get24HourTimeString(date)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMoreMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <li className="entry">
      <div className={`entry__more-menu ${menuOpen ? "entry__more-menu--open" : null}`}>
        <button className="menu-btn">
          <img className="menu-btn__icon" src="/icons/pencil-edit.png" alt="edit pencil" />
          <span className="menu-btn__label">Edit</span>
        </button>
        <button className="menu-btn">
          <img className="menu-btn__icon" src="/icons/trash.png" alt="edit pencil" />
          <span className="menu-btn__label" >Delete</span>
        </button>
      </div>

      <button className="entry__more-btn" onClick={toggleMoreMenu}>
        <img src="/icons/more.png" alt="more menu" />
      </button>
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

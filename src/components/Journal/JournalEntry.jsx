import React, { useState } from 'react';
import { get24HourTimeString } from '../../util';
import '../../styles/JournalEntry.css'
import { MoreMenu } from '../shared/MoreMenu';
import Editor from '../shared/Editor';

const JournalEntry = ({ entry, updateJournalEntry }) => {
  const date = new Date(entry.ts)
  const time = get24HourTimeString(date)
  const [text, setText] = useState(entry.text)
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleTextChange = (content) => {
    setText(content)
  }

  const handleSaveEdits = (e) => {
    setEditing(false)
    const updates = { text }
    updateJournalEntry(entry.id, updates)
  }

  const handleCancelEdits = () => {
    setEditing(false)
    setText(entry.text)
  }

  const handleDelete = () => {
    window.alert('JournalEntry will be deleted')
  }

  return (
    <li className="entry">
      <div>
        <Editor
          key={Number(editing)} // Used to instantiate quill with new config
          value={text}
          readOnly={!editing}
          onChange={handleTextChange}
          theme={editing ? "snow" : "bubble"}
        />
        {
          editing ? (
            <>
              <button onClick={handleSaveEdits}>Save</button>
              <button onClick={handleCancelEdits}>Cancel</button>
            </>
          ) : (
            <MoreMenu handleEditClick={handleEditing} handleDeleteClick={handleDelete} />
          )
        }</div>
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

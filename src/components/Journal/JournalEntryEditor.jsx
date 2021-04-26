import React from 'react';
import TrixEditor from '../shared/TrixEditor'

const JournalEntryEditor = (props) => {
  const { handleEntryText, handleTagsChange, handleSubmit, entryText, entryTags } = props

  return (
    <form onSubmit={handleSubmit}>
      <TrixEditor
        onChange={handleEntryText}
        value={entryText}
        placeholder={'What\'s in your head?'}
      />
      <input
        name='tags'
        onChange={handleTagsChange}
        value={entryTags}
        placeholder={'Tags'}
        type="text"
        required
      />
      <button>+</button>
    </form>
  )
}

export default JournalEntryEditor;

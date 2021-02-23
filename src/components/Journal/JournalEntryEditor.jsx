import React from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../../styles/JournalEntryEditor.css'

const JournalEntryEditor = (props) => {
  const { handleEntryText, handleTagsChange, handleSubmit, entryText, entryTags } = props

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill
        name='text'
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
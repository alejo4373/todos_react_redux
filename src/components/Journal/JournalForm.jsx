import React from 'react';
import TextareaAutoGrow from '../Todos/TextareaAutoGrow';

const JournalForm = (props) => {
  const { handleChange, handleSubmit, entryText, entryTags } = props

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutoGrow
        name='text'
        onChange={handleChange}
        value={entryText}
        placeholder={'Type a journal entry'}
        required
      />
      <input
        name='tags'
        onChange={handleChange}
        value={entryTags}
        placeholder={'Tags'}
        type="text"
        required
      />
      <button>+</button>
    </form>
  )
}

export default JournalForm;

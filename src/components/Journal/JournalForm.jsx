import React, { Component } from 'react';

const JournalForm = (props) => {
  const { handleChange, handleSubmit, entryText, entryTags} = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='text'
        onChange={handleChange}
        value={entryText}
        placeholder={'Type a journal entry'}
        type="text"
        autoFocus
        required
      />
      <input
        name='tag_ids'
        onChange={handleChange}
        value={entryTags}
        placeholder={'Tag ids'}
        type="text"
        required
      />
      <button>+</button>
    </form>
  )
}

export default JournalForm;

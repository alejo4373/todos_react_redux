import React from 'react';

const JournalForm = (props) => {
  const { handleChange, handleSubmit, entryText, entryTags } = props

  const handleTextarea = (e) => {
    e.target.style.height = "6em"
    e.target.style.height = `${e.target.scrollHeight}px`
    handleChange(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name='text'
        onChange={handleTextarea}
        value={entryText}
        placeholder={'Type a journal entry'}
        type="text"
        required
      >
      </textarea>
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

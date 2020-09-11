import React from 'react';
import TextAreaAutoGrow from './TextareaAutoGrow'

const TodoForm = (props) => {
  const { handleChange, handleSubmit, inputText, todoValue } = props

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextAreaAutoGrow
        name='inputText'
        onChange={handleChange}
        onKeyPress={handleSave}
        value={inputText}
        placeholder={'Type a todo'}
        type="text"
        required
      />
      <input
        name='todoValue'
        onChange={handleChange}
        value={todoValue}
        placeholder={'value'}
        type="number"
        min="100"
        required
      />
      <button>Add</button>
    </form>
  )
}

export default TodoForm;
import React from 'react';
import TrixEditor from '../shared/TrixEditor';

const TodoForm = (props) => {
  const { handleChange, handleSubmit, inputText, todoValue, tags } = props

  const handleTodoTextChange = (content) => {
    handleChange({ target: { name: 'inputText', value: content } })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TrixEditor
        onChange={handleTodoTextChange}
        value={inputText}
        placeholder={'What do you have to do?'}
      />
      <input
        name='tags'
        onChange={handleChange}
        value={tags}
        placeholder={'e.g. misc, work, etc.'}
        type="text"
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

import React from 'react';

const TodoForm = (props) => {
  const { handleChange, handleSubmit, inputText, todoValue } = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='inputText'
        onChange={handleChange}
        value={inputText}
        placeholder={'Type a todo'}
        type="text"
        autoFocus
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

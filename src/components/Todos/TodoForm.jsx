import React from 'react';
import TrixEditor from '../shared/TrixEditor';
import "../../styles/TodoForm.css"

const TodoForm = (props) => {
  const { handleChange, handleSubmit, inputText, todoValue, tags } = props

  const handleTodoTextChange = (content) => {
    handleChange({ target: { name: 'inputText', value: content } })
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TrixEditor
        onChange={handleTodoTextChange}
        value={inputText}
        placeholder={'What do you have to do?'}
      />
      <div className="control-strip">
        <input
          name='tags'
          className="control-strip__control"
          onChange={handleChange}
          value={tags}
          placeholder={'Tags: work, misc, etc.'}
          type="text"
        />
        <input
          name='todoValue'
          className="control-strip__control"
          onChange={handleChange}
          value={todoValue}
          placeholder={'value'}
          type="number"
          min="100"
          required
        />
        <button className="control-strip__control" >Add</button>
      </div>
    </form>
  )
}

export default TodoForm;

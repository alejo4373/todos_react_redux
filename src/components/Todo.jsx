import React, { Component } from 'react';

const Todo = (props) => {
  const { todo, deleteTodo, toggleCompleted } = props
  return (
    <li>
      <div>
        <span
          onClick={toggleCompleted}
          data-todo_id={todo.id}
          className={todo.completed ? "completed" : null}
        >
          <input type="checkbox" readOnly checked={todo.completed} />
          {todo.text}
        </span>
        <button id={todo.id} onClick={deleteTodo}>X</button>
      </div>
    </li>
  )
}

export default Todo;

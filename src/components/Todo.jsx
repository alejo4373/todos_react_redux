import React, { Component } from 'react';

const Todo = (props) => {
  const { todo, deleteTodo, toggleCompleted } = props
  return (
    <li>
      <span
        onClick={toggleCompleted}
        data-todo_id={todo.id}
        className={todo.completed ? "completed" : null}
      >
        <input type="checkbox" readOnly checked={todo.completed} />
        {todo.text}
      </span>
      <button className="btn_remove" id={todo.id} onClick={deleteTodo}>X</button>
    </li>
  )
}

export default Todo;

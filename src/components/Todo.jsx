import React, { Component } from 'react';

const Todo = (props) => {
  const { todo, deleteTodo } = props
    return (
      <li>
        <p>{todo.text}</p>
        <button id={todo.id} onClick={deleteTodo}>X</button>
      </li>
    )
}

export default Todo;

import React, { Component } from 'react';

const Todo = (props) => {
  const { todo } = props
    return (
      <li>
        <p>{todo.text}</p>
      </li>
    )
}

export default Todo;

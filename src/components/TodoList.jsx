import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const todos = [];
  for (let todo in props.todos) {
    todos.push(<Todo todo={props.todos[todo]} />)
  }
    return (
      <div>
        {todos}
      </div>
    )
}

export default TodoList;

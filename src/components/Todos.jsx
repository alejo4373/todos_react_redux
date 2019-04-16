import React, { Component } from 'react';
import TodoList from './TodoList';

const Todos = (props) => {
    return (
      <TodoList todos={props.todos} />
    )
}

export default Todos;

import React, { Component } from 'react';
import TodoList from './TodoList';

const Todos = (props) => {
  const { todos, deleteTodo } = props;
    return (
      <div>
        <hr/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    )
}

export default Todos;

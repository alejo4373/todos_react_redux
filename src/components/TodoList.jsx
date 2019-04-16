import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, deleteTodo } = props;
  const todosList = [];
  
  for (let todo in todos) {
    todosList.push(<Todo key={todos[todo].id} todo={todos[todo]} deleteTodo={deleteTodo}/>)
  }

  return (
    <div>
      {todosList}
    </div>
  )
}

export default TodoList;

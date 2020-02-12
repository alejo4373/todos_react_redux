import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, deleteTodo, toggleCompleted } = props;
  const todosList = [];

  for (let todo in todos) {
    todosList.push(
      <Todo
        key={todos[todo].id}
        todo={todos[todo]}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    )
  }

  return (
    <ul>
      {todosList}
    </ul>
  )
}

export default TodoList;

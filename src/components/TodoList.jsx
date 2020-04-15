import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos, deleteTodo, toggleCompleted } = props;
  const todosList = [];

  for (let todo in todos) {
    todosList.push(
      <TodoItem
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

import React from 'react';
import TodoList from './TodoList';

const Todos = (props) => {
  const { todos, deleteTodo, toggleCompleted } = props;
  return (
    <div>
      <hr />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  )
}

export default Todos;

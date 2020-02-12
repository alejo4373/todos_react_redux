import React from 'react';

const Todo = (props) => {
  const { todo, deleteTodo, toggleCompleted } = props
  return (
    <li className="todo-item">
      <div
        onClick={toggleCompleted}
        data-todo_id={todo.id}
        className={'todo-content ' + (todo.completed ? "completed" : "")}
      >
        <input type="checkbox" readOnly checked={todo.completed} />
        {todo.text}
      </div>
      <button className="btn_remove" id={todo.id} onClick={deleteTodo}>X</button>
    </li>
  )
}

export default Todo;

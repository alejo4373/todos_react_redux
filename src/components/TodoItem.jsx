import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  const { todo, deleteTodo, toggleCompleted } = props
  return (
    <li className="todo-item">
      <Link
        to={`/todos/${todo.id}`}
        data-todo_id={todo.id}
        className={'todo-content ' + (todo.completed ? "completed" : "")}
      >
        <input type="checkbox" readOnly checked={todo.completed} />
        {todo.text}
      </Link>
      <button className="btn_remove" id={todo.id} onClick={deleteTodo}>X</button>
    </li>
  )
}

export default TodoItem;

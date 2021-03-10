import React from 'react';
import { Link } from 'react-router-dom';

const TodoItemSimple = (props) => {
  const { todo } = props
  return (
    <li className="todo-item">
      <Link
        to={`/todos/${todo.id}`}
        className={'todo-content ' + (todo.completed ? "completed" : "")}
      >
        <input type="checkbox" checked={todo.completed} />
        <div dangerouslySetInnerHTML={{ __html: todo.text }}></div>
      </Link>
    </li>
  )
}

export default TodoItemSimple;

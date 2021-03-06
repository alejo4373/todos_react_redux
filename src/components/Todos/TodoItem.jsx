import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  const { todo, toggleCompleted } = props

  const handleToggleCompleted = () => {
    toggleCompleted(todo.id)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
        data-todo_id={todo.id}
      />
      <Link
        to={`/todos/${todo.id}`}
        data-todo_id={todo.id}
        className={'todo-content ' + (todo.completed ? "completed" : "")}
      >
        <div className="todo-item__text" dangerouslySetInnerHTML={{ __html: todo.text }}></div>
      </Link>
    </li>
  )
}

export default TodoItem;

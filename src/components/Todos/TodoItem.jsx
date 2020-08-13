import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  const { todo, deleteTodo, toggleCompleted } = props

  const handleToggleCompleted = () => {
    debugger;
    toggleCompleted(todo.id)
  }

  const handleDeleteTodo = (e) => {
    deleteTodo(todo.id)
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
        {todo.text}
      </Link>
      <button className="btn_remove" id={todo.id} onClick={handleDeleteTodo}>X</button>
    </li>
  )
}

export default TodoItem;

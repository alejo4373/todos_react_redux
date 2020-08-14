import React from 'react'
import TodoItemMinimal from './TodoItemMinimal'
import TodoItem from './TodoItem'

const TodosList = ({ todos, title, minimal, handlers }) => {
  const TodoComponent = minimal ? TodoItemMinimal : TodoItem
  return (
    <div>
      <h3>{title}</h3>
      <ul>{
        todos.length
          ? (todos.map(todo => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              {...handlers}
            />
          )))
          : (<li>None</li>)
      }</ul>
    </div>
  )
}

export default TodosList

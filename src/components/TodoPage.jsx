import React, { Component } from 'react';

class TodoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const { getTodo } = this.props
    getTodo(id)
  }

  componentDidUpdate(prevProps) {
    const { todo, getTodo } = this.props
    const prevTodo = prevProps.todo
    const { id } = this.props.match.params
    console.log(todo, prevTodo)
    if (todo === prevTodo) {
      getTodo(id)
    }
  }

  render() {
    // const { todo } = this.state
    const { todo, toggleCompleted, deleteTodo } = this.props;

    if (!todo) {
      return <p>Todo not found....</p>
    }

    return (
      <div
        to={`/todos/${todo.id}`}
        onClick={toggleCompleted}
        data-todo_id={todo.id}
        className={'todo-content ' + (todo.completed ? "completed" : "")}
      >
        <input type="checkbox" readOnly checked={todo.completed} />
        {todo.text}
        <button className="btn_remove" id={todo.id} onClick={deleteTodo}>X</button>
      </div>
    )
  }
}

export default TodoPage;

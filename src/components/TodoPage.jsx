import React, { Component } from 'react';

class TodoPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTodo(id)
  }

  handleToggleCompleted = (e) => {
    this.props.toggleCompleted(this.props.todo)
  }

  render() {
    const { todo, deleteTodo } = this.props;

    if (!todo) {
      return <p>Todo not found....</p>
    }

    return (
      <div>
        <div
          onClick={this.handleToggleCompleted}
          data-todo_id={todo.id}
          className={'todo-content ' + (todo.completed ? "completed" : "")}
        >
          <input type="checkbox" readOnly checked={todo.completed} />
          {todo.text}
        </div>
        <button className="btn_remove" id={todo.id} onClick={deleteTodo}>X</button>
      </div>
    )
  }
}

export default TodoPage;

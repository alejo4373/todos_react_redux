import React, { Component } from 'react';

class TodoPage extends Component {
  state = {
    text: '',
    editing: false
  }

  componentDidUpdate(prevProps) {
    const { todo } = this.props
    if (todo && todo !== prevProps.todo) {
      this.setState({
        text: todo.text
      })
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTodo(id)
  }

  handleToggleCompleted = (e) => {
    this.props.toggleCompleted(this.props.todo)
  }

  handleEditButton = () => {
    this.setState({
      editing: true
    })
  }

  handleEditSave = () => {
    const { todo, updateTodo } = this.props
    const todoUpdates = {
      text: this.state.text
    }

    updateTodo(todo.id, todoUpdates)

    this.setState({
      editing: false
    })
  }

  handleTodoText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleDeleteTodo = (e) => {
    const todoId = e.target.id;
    const { deleteTodo, history } = this.props
    deleteTodo(todoId)
    history.goBack()
  }

  render() {
    const { editing, text } = this.state;
    const { todo } = this.props;

    if (!todo) {
      return <p>Todo not found....</p>
    }

    return (
      <div>
        <div
          data-todo_id={todo.id}
          className={'todo-content ' + (todo.completed ? "completed" : "")}
        >
          <input type="checkbox" readOnly checked={todo.completed} />
          {
            editing
              ? (<input type="text" value={text} onChange={this.handleTodoText} />)
              : (todo.text)
          }
        </div>
        <button className="btn_remove" id={todo.id} onClick={this.handleDeleteTodo}>X</button>
        {
          editing
            ? (<button className="btn" onClick={this.handleEditSave}>Save</button>)
            : (<button className="btn" onClick={this.handleEditButton}>Edit</button>)
        }
      </div>
    )
  }
}

export default TodoPage;

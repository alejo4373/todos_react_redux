import React, { Component } from 'react';
import "../../styles/TodoPage.css"

class TodoPage extends Component {
  todoInputRef = React.createRef()
  state = {
    text: '',
    editing: false,
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
    this.props.toggleCompleted(this.props.todo.id)
  }

  handleEditClick = () => {
    console.log('handleEditClick =>')
    this.setState({
      editing: true
    }, () => this.todoInputRef.current.focus())
  }

  handleEditSave = (e) => {
    e.preventDefault()
    console.log('handleEditSave =>')
    const { todo, updateTodo } = this.props
    if (todo.text !== this.state.text) {
      const todoUpdates = {
        text: this.state.text
      }
      updateTodo(todo.id, todoUpdates)
    }

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
    console.log('deleting todo =>')
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
      <div className="todo-page">
        <form
          data-todo_id={todo.id}
          className={'todo-content ' + (todo.completed ? "completed" : "")}
          onSubmit={this.handleEditSave}
        >
          <input type="checkbox" readOnly checked={todo.completed} onChange={this.handleToggleCompleted} />
          {
            editing
              ? (
                <input
                  type="text"
                  className="todo-text-input"
                  value={text}
                  onChange={this.handleTodoText}
                  onBlur={this.handleEditSave}
                  ref={this.todoInputRef}
                />
              )
              : <p
                tabIndex="0"
                className="todo-text"
                onClick={this.handleEditClick}
                onFocus={this.handleEditClick}
              >
                {todo.text}
              </p>
          }
        </form>
        <button className="btn_remove" id={todo.id} onClick={this.handleDeleteTodo}>Delete</button>
      </div>
    )
  }
}

export default TodoPage;

import React, { Component } from 'react';
import "../styles/TodoPage.css"

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
    this.props.toggleCompleted(this.props.todo)
  }

  handleEditButton = () => {
    this.setState({
      editing: true
    }, () => this.todoInputRef.current.focus())
  }

  handleEditCancel = () => {
    this.setState({
      editing: false
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
      <div className="todo-page">
        <div
          data-todo_id={todo.id}
          className={'todo-content ' + (todo.completed ? "completed" : "")}
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
              : <p className="todo-text" onClick={this.handleEditButton}>{todo.text}</p>
          }
        </div>
        <button className="btn_remove" id={todo.id} onClick={this.handleDeleteTodo}>Delete</button>
        {
          editing
            ? (
              <>
                <button className="btn" onClick={this.handleEditSave}>Save</button>
                <button className="btn" onClick={this.handleEditCancel}>Cancel</button>
              </>
            )
            : (<button className="btn" onClick={this.handleEditButton}>Edit</button>)
        }
      </div>
    )
  }
}

export default TodoPage;

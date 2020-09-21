import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../styles/TodoPage.css"
import TextareaAutoGrow from './TextareaAutoGrow';
import withPreviewClickToEdit from './withPreviewClickToEdit';

const TextareaAutoGrowWithPreview = withPreviewClickToEdit(TextareaAutoGrow)

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

  handleEditSave = () => {
    const { todo, updateTodo } = this.props
    if (todo.text !== this.state.text) {
      const todoUpdates = {
        text: this.state.text
      }
      updateTodo(todo.id, todoUpdates)
    }
  }

  handleTodoText = (e) => {
    const { value } = e.target
    this.setState({
      text: value
    })
  }

  handleDeleteTodo = (e) => {
    const todoId = e.target.id;
    const { deleteTodo, history } = this.props
    deleteTodo(todoId)
    history.goBack()
  }

  render() {
    const { text } = this.state;
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
          <TextareaAutoGrowWithPreview
            value={text}
            onChange={this.handleTodoText}
            onBlur={this.handleEditSave}
          />
        </form>
        <p> 🏷 {
          todo.tags.map((tag, i) => (
            <>
              <Link to={`/todos?tags[]=${tag}`}>{tag}</Link>
              {i === todo.tags.length - 1 ? " " : ", "}
            </>
          ))
        }</p>
        <button className="btn_remove" id={todo.id} onClick={this.handleDeleteTodo}>Delete</button>
      </div>
    )
  }
}

export default TodoPage;

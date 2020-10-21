import React, { Component } from 'react';
import "../../styles/TodoPage.css"
import { Tag } from '../shared/Tag';
import TextareaAutoGrow from './TextareaAutoGrow';
import withPreviewClickToEdit from './withPreviewClickToEdit';

const TextareaAutoGrowWithPreview = withPreviewClickToEdit(TextareaAutoGrow)

class TodoPage extends Component {
  todoInputRef = React.createRef()
  state = {
    text: '',
    editing: false,
    tag: ''
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

  handleTagInput = (e) => {
    const { value } = e.target
    this.setState({
      tag: value
    })
  }

  handleDeleteTodo = (e) => {
    const todoId = e.target.id;
    const { deleteTodo, history } = this.props
    deleteTodo(todoId)
    history.goBack()
  }

  handleRemoveTag = (tag) => {
    const { removeTagFromTodo, todo } = this.props
    removeTagFromTodo(todo.id, tag)
  }

  handleAddTag = () => {
    const { tag } = this.state
    const { requestAddTag, todo } = this.props
    requestAddTag(todo.id, tag)
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
        <div>
          <ul> 🏷 {
            todo.tags.map(tag => <Tag key={tag} name={tag} handleRemoveTag={this.handleRemoveTag} />)
          }</ul>
          <input type="text" onChange={this.handleTagInput} />
          <button onClick={this.handleAddTag}>Add Tag</button>
        </div>
        <button className="btn_remove" id={todo.id} onClick={this.handleDeleteTodo}>Delete</button>
      </div>
    )
  }
}

export default TodoPage;

import React, { Component } from 'react';
import "../../styles/TodoPage.css"
import { Tag } from '../shared/Tag';
import TextareaAutoGrow from './TextareaAutoGrow';
import { MoreMenu } from '../shared/MoreMenu'

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

  handleEditSave = (e) => {
    e.preventDefault()
    const { todo, updateTodo } = this.props
    if (todo.text !== this.state.text) {
      const todoUpdates = {
        text: this.state.text
      }
      updateTodo(todo.id, todoUpdates)
    }
    this.setEditing(false)
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
      tag: value.toLowerCase()
    })
  }

  handleDeleteTodo = (e) => {
    const todoId = this.props.todo.id
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

  setEditing = (value) => {
    this.setState({ editing: value })
  }

  render() {
    const { text, tag, editing } = this.state;
    const { todo } = this.props;

    if (!todo) {
      return <p>Todo not found....</p>
    }

    return (
      <div className="todo-page">
        <MoreMenu
          handleEditClick={() => this.setEditing(true)}
          handleDeleteClick={this.handleDeleteTodo}
        />
        <input
          type="checkbox"
          readOnly
          checked={todo.completed}
          onChange={this.handleToggleCompleted}
        />
        {editing ?
          (<>
            <form
              data-todo_id={todo.id}
              className={'todo-content ' + (todo.completed ? "completed" : "")}
              onSubmit={this.handleEditSave}
            >
              <TextareaAutoGrow
                value={text}
                onChange={this.handleTodoText}
              />
              <button>Save</button>
              <button onClick={() => this.setEditing(false)}>Cancel</button>
            </form>
          </>) : <p>{text}</p>
        }
        <div className="tags">
          <ul className="tags__list"> 🏷 {
            todo.tags.map(tag => <Tag key={tag} name={tag} handleRemoveTag={this.handleRemoveTag} />)
          }</ul>
          <input type="text" onChange={this.handleTagInput} value={tag} />
          <button onClick={this.handleAddTag}>Add Tag</button>
        </div>
      </div>
    )
  }
}

export default TodoPage;

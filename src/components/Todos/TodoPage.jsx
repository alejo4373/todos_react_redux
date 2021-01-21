import React, { Component } from 'react';
import "../../styles/TodoPage.css"
import { Tag } from '../shared/Tag';
import TextareaAutoGrow from './TextareaAutoGrow';
import { MoreMenu } from '../shared/MoreMenu'
import DatePicker from 'react-datepicker'

class TodoPage extends Component {
  todoInputRef = React.createRef()
  state = {
    text: '',
    editing: false,
    tag: '',
    selectedDay: null
  }

  componentDidUpdate(prevProps) {
    const { todo } = this.props
    if (todo && todo !== prevProps.todo) {
      this.setState({
        text: todo.text,
        selectedDay: new Date(this.props.todo.completed_at)
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
    const { selectedDay, text } = this.state
    const todoUpdates = {}

    if (selectedDay.toISOString() !== new Date(todo.completed_at).toISOString()) {
      todoUpdates.completed_at = selectedDay.toISOString()
    }

    if (todo.text !== text) {
      todoUpdates.text = text
    }

    if (Object.values(todoUpdates).length) {
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

  handleDateChange = (selectedDay) => {
    this.setState({
      selectedDay
    })
  }

  render() {
    const { text, tag, editing, selectedDay } = this.state;
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
              onSubmit={this.handleEditSave}
            >
              <TextareaAutoGrow
                value={text}
                onChange={this.handleTodoText}
              />
              <label>Completed at</label>
              <style>{`
                .react-datepicker__input-time-container 
                .react-datepicker-time__input-container 
                .react-datepicker-time__input 
                input {
                    width: unset
                  }
              `} </style>
              <DatePicker
                onChange={this.handleDateChange}
                selected={selectedDay}
                showTimeInput
                dateFormat="MM/dd/yyyy h:mm aa"
              />
              <div>
                <button> Save</button>
                <button onClick={() => this.setEditing(false)}>Cancel</button>
              </div>
            </form>
          </>) : (
            <div>
              <p className={'todo-content ' + (todo.completed ? "completed" : "")} >{text}</p>
              <p>{todo.completed_at}</p>
            </div>
          )
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

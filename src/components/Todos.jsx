import React, { Component } from 'react';
import { sanitizeTags } from '../util';
import TodoForm from './Todos/TodoForm';
import TodosFilter from './Todos/TodosFilter';
import TodosList from './Todos/TodosList';

class Todos extends Component {
  state = {
    inputText: '',
    todoValue: 100,
    todo: null,
    tags: '',
  }

  componentDidMount() {
    const tagsQueryString = this.props.location.search
    let tags = (new URLSearchParams(tagsQueryString)).getAll('tags[]')
    if (tags.length) {
      this.props.getTodosByTags(tagsQueryString)
    } else {
      this.props.getAllTodos()
    }
  }

  /* Event Handlers */
  handleSubmit = (event) => {
    event.preventDefault();
    const { inputText, todoValue, tags } = this.state;

    const todo = {
      text: inputText.trim(),
      value: todoValue,
      completed: false,
      tags: sanitizeTags(tags.split(','))
    }

    this.setState({
      inputText: '',
      tags: '',
      todoValue: 100
    })

    if (todo.text && todo.value) {
      this.props.addTodo(todo)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleFilterChange = (e) => {
    this.props.setTodosFilter(e.target.value)
  }

  render() {
    const { todos, toggleCompleted, filterValue } = this.props;
    return (
      <div className='todos-container'>
        <h2>Todos</h2>
        <TodoForm
          inputText={this.state.inputText}
          todoValue={this.state.todoValue}
          tags={this.state.tags}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
        <TodosFilter handleFilterChange={this.handleFilterChange} filterValue={filterValue} />
        <TodosList
          title="Todos"
          todos={todos}
          handlers={{
            toggleCompleted
          }}
        />
      </div>
    )
  }
}
export default Todos;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUEST_ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../store/actionTypes';
import Todos from '../components/Todos';
import TodoForm from '../components/TodoForm';

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    
    const todo = {
      text: inputText.trim(),
      value: 100, // Hard coded for now
      completed: false
    }

    this.setState({
      inputText: ''
    })

    if (todo.text) {
      this.props.addTodo(todo)
    }
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleDeleteTodo = (event) => {
    const todoId = event.target.id;
    this.props.deleteTodo(todoId)
  }

  handleToggleCompleted = (event) => {
    const todoId = event.currentTarget.dataset.todo_id;
    this.props.toggleCompleted(todoId);
  }

  render() {
    return (
      <div>
        <h2>Todos App</h2>
        <TodoForm
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos
          todos={this.props.todos}
          deleteTodo={this.handleDeleteTodo}
          toggleCompleted={this.handleToggleCompleted}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: REQUEST_ADD_TODO, todo: todo }),
    toggleCompleted: (id) => dispatch({ type: TOGGLE_COMPLETED, todo: { id: id } }),
    deleteTodo: (id) => dispatch({ type: DELETE_TODO, todo: { id: id } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

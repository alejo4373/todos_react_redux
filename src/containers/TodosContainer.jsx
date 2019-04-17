import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../store/actionTypes';
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
    const todo = {
      id: uuid(),
      text: this.state.inputText,
      completed: false
    }

    this.setState({
      inputText: ''
    })

    this.props.addTodo(todo)
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
    debugger;
    this.props.toggleCompleted(todoId);
  }

  render() {
    return (
      <div>
        <h2>Todos App</h2>
        <TodoForm inputText={this.inputText} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Todos todos={this.props.todos} deleteTodo={this.handleDeleteTodo} toggleCompleted={this.handleToggleCompleted}/>
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
    addTodo: (todo) => dispatch({type: ADD_TODO, todo: todo}),
    toggleCompleted: (id) => dispatch({type: TOGGLE_COMPLETED, todo: {id: id}}),
    deleteTodo: (id) => dispatch({type: DELETE_TODO, todo: {id: id}}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

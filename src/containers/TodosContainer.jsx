import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { ADD_TODO } from '../store/actionTypes';
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
    this.props.addTodo(todo)
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }
  render() {
    return (
      <div>
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Todos todos={this.props.todos}/>
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
    addTodo: (todo) => dispatch({type: ADD_TODO, todo: todo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

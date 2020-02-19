import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUEST_ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, REQUEST_FETCH_TODOS } from '../store/actionTypes';
import '../styles/Todos.css'
import Todos from '../components/Todos';
import TodoForm from '../components/TodoForm';

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todoValue: 100,
    }
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputText, todoValue } = this.state;

    const todo = {
      text: inputText.trim(),
      value: todoValue,
      completed: false
    }

    this.setState({
      inputText: '',
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
      <div className='todos-container'>
        <h2>Todos</h2>
        <TodoForm
          inputText={this.state.inputText}
          todoValue={this.state.todoValue}
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

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: REQUEST_ADD_TODO, todo: todo }),
    fetchTodos: () => dispatch({ type: REQUEST_FETCH_TODOS }),
    toggleCompleted: (id) => dispatch({ type: TOGGLE_COMPLETED, payload: { todo: { id: id } } }),
    deleteTodo: (id) => dispatch({ type: DELETE_TODO, payload: { todo: { id: id } } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Todos.css'
import Todos from '../components/Todos';
import TodoForm from '../components/TodoForm';
import { 
  REQUEST_ADD_TODO, 
  REQUEST_FETCH_TODOS,
  REQUEST_UPDATE_TODO,
  REQUEST_DELETE_TODO 
} from '../store/actionTypes/todos';

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
    const todo = this.props.todos[todoId]
    const todoUpdates = {
      completed: !todo.completed
    }
    this.props.updateTodo(todoId, todoUpdates);
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
    updateTodo: (id, todoUpdates) => dispatch({ 
      type: REQUEST_UPDATE_TODO,
      payload: { id, todoUpdates }
    }),
    deleteTodo: (id) => dispatch({ 
      type: REQUEST_DELETE_TODO,
      payload: { id }  
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

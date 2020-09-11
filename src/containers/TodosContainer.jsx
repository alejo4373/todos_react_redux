import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Todos.css'
import Todos from '../components/Todos';
import TodoPage from '../components/Todos/TodoPage';
import {
  REQUEST_ADD_TODO,
  REQUEST_FETCH_TODOS,
  REQUEST_FETCH_TODO,
  REQUEST_UPDATE_TODO,
  REQUEST_DELETE_TODO,
  SET_TODOS_FILTER,
  REQUEST_TOGGLE_TODO_COMPLETED
} from '../store/actionTypes/todos';
import { Switch, Route } from 'react-router-dom';

class TodosContainer extends Component {

  /* Todo's Ops */
  deleteTodo = (todoId) => {
    this.props.deleteTodo(todoId)
  }

  getAllTodos = () => {
    this.props.fetchTodos()
  }

  getTodo = (id) => {
    this.props.fetchTodo(id)
  }

  filterTodos = (id) => {
    this.props.setTodosFilter(id)
  }

  toggleCompleted = (id) => {
    this.props.toggleTodoCompleted(id);
  }

  updateTodo = (todoId, updates) => {
    this.props.updateTodo(todoId, updates)
  }

  applyTodosFilter = (todos, filter) => {
    switch (filter) {
      case "completed":
        return todos.filter(todo => todo.completed);
      case "incomplete":
        return todos.filter(todo => !todo.completed);
      case "all":
      default:
        return todos
    }
  }

  renderTodos = () => {
    const { todos, filter } = this.props
    let filteredTodos = this.applyTodosFilter(todos, filter)
    return (
      <Todos
        todos={filteredTodos}
        deleteTodo={this.deleteTodo}
        toggleCompleted={this.toggleCompleted}
        getAllTodos={this.getAllTodos}
        addTodo={this.props.addTodo}
        setTodosFilter={this.props.setTodosFilter}
        filterValue={filter}
      />
    )
  }

  renderTodoPage = (routeProps) => {
    const todo = this.props.activeTodo
    return (
      <TodoPage
        {...routeProps}
        getTodo={this.getTodo}
        todo={todo}
        toggleCompleted={this.toggleCompleted}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo}
      />
    )
  }

  render() {
    const { path } = this.props.match
    return (
      <Switch>
        <Route path={`${path}/:id`} render={this.renderTodoPage} />
        <Route path={path} render={this.renderTodos} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ todos }) => todos

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: REQUEST_ADD_TODO, todo: todo }),
    fetchTodos: () => dispatch({ type: REQUEST_FETCH_TODOS }),
    fetchTodo: (id) => dispatch({ type: REQUEST_FETCH_TODO, id }),
    updateTodo: (id, todoUpdates) => dispatch({
      type: REQUEST_UPDATE_TODO,
      payload: { id, todoUpdates }
    }),
    toggleTodoCompleted: (id) => dispatch({
      type: REQUEST_TOGGLE_TODO_COMPLETED,
      payload: { id }
    }),
    deleteTodo: (id) => dispatch({
      type: REQUEST_DELETE_TODO,
      payload: { id }
    }),
    setTodosFilter: (filter) => dispatch({ type: SET_TODOS_FILTER, payload: { filter } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

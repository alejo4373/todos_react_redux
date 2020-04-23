import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Todos.css'
import Todos from '../components/Todos';
import TodoPage from '../components/TodoPage';
import {
  REQUEST_ADD_TODO,
  REQUEST_FETCH_TODOS,
  REQUEST_FETCH_TODO,
  REQUEST_UPDATE_TODO,
  REQUEST_DELETE_TODO
} from '../store/actionTypes/todos';
import { Switch, Route } from 'react-router';

class TodosContainer extends Component {

  /* Todo's Ops */
  handleDeleteTodo = (event) => {
    const todoId = event.target.id;
    this.props.deleteTodo(todoId)
  }

  getAllTodos = () => {
    this.props.fetchTodos()
  }

  getTodo = (id) => {
    this.props.fetchTodo(id)
  }

  handleToggleCompleted = (event) => {
    const todoId = event.currentTarget.dataset.todo_id;
    const todo = this.props.todos[todoId]
    const todoUpdates = {
      completed: !todo.completed
    }
    this.props.updateTodo(todoId, todoUpdates);
  }

  renderTodos = () => {
    return (
      <Todos
        todos={this.props.todos}
        deleteTodo={this.handleDeleteTodo}
        toggleCompleted={this.handleToggleCompleted}
        getAllTodos={this.getAllTodos}
        addTodo={this.props.addTodo}
      />
    )
  }

  renderTodoPage = (routeProps) => {
    const { id } = routeProps.match.params
    const todo = this.props.todos[id]
    return (
      <TodoPage
        {...routeProps}
        getTodo={this.getTodo}
        todo={todo}
        toggleCompleted={this.handleToggleCompleted}
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

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: REQUEST_ADD_TODO, todo: todo }),
    fetchTodos: () => dispatch({ type: REQUEST_FETCH_TODOS }),
    fetchTodo: (id) => dispatch({ type: REQUEST_FETCH_TODO, id }),
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

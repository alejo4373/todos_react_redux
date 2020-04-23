import React, { Component } from 'react';
import TodoList from './TodoList';

class Todos extends Component {
  componentDidMount() {
    this.props.getAllTodos()
  }

  render() {
    const { todos, deleteTodo, toggleCompleted } = this.props;
    return (
      <div>
        <hr />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      </div>
    )
  }
}
export default Todos;

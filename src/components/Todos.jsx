import React, { Component } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from './TodoItem';

class Todos extends Component {
  state = {
    inputText: '',
    todoValue: 100,
    todo: null
  }

  componentDidMount() {
    this.props.getAllTodos()
  }

  /* Event Handlers */
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

  render() {
    const { todos, deleteTodo, toggleCompleted } = this.props;
    return (
      <div className='todos-container'>
        <h2>Todos</h2>
        <TodoForm
          inputText={this.state.inputText}
          todoValue={this.state.todoValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
        <ul>{
          Object.values(todos).map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
            />
          ))
        }</ul>
      </div>
    )
  }
}
export default Todos;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../store/actionTypes';
import Todos from '../components/Todos';

class TodosContainer extends Component {
  render() {
    return (
      <div>
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

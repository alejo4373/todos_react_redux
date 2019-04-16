import React, { Component } from 'react';

const TodoForm = (props) => {
  const { handleChange, handleSubmit } = props
    return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
        <button>+</button>
      </form>
    )
}

export default TodoForm;

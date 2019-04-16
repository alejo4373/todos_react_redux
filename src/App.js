import React, { Component } from 'react';
import './styles/App.css';

import TodosContainer from './containers/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosContainer />
      </div>
    );
  }
}

export default App;

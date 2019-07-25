import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route, Link } from 'react-router-dom';

import TodosContainer from './containers/TodosContainer';
import JournalContainer from './containers/JournalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/todos' >Todos</Link>{' '}
          <Link to='/journal'>Journal</Link> 
        </nav>
        <Switch>
          <Route path='/todos' component={TodosContainer } />
          <Route path='/journal' component={JournalContainer } />
        </Switch>
      </div>
    );
  }
}

export default App;

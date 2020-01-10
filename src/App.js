import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import TodosContainer from './containers/TodosContainer';
import JournalContainer from './containers/JournalContainer';
import AuthContainer from './containers/AuthContainer';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/todos' >Todos</Link>{' '}
          <Link to='/journal'>Journal</Link>
        </nav>
        <Switch>
          <PrivateRoute path='/todos' component={TodosContainer} />
          <PrivateRoute path='/journal' component={JournalContainer} />
          <Route path='/(login|signup)' component={AuthContainer} />
          <Route path='/' component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;

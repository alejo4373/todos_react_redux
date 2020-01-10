import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Private from './containers/Private';
import Public from './containers/Public';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/(|login|signup)" component={Public} />
          <PrivateRoute component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;

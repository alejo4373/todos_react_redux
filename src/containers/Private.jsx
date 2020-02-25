import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import TodosContainer from './TodosContainer';
import JournalContainer from './JournalContainer';
import ProfileContainer from './ProfileContainer';

class Private extends Component {
  render() {
    const { auth, location } = this.props
    if (!auth.loggedIn) {
      return <Redirect to={{
        pathname: '/login',
        state: { referrer: location.pathname }
      }} />
    }

    return (
      <div>
        <nav>
          <Link to='/todos' >Todos</Link>{' '}
          <Link to='/journal'>Journal</Link>{' '}
          <Link to='/profile'>Profile</Link>
        </nav>
        <Switch>
          <Route path='/todos' component={TodosContainer} />
          <Route path='/journal' component={JournalContainer} />
          <Route path='/profile' component={ProfileContainer} />
        </Switch>
      </div>
    )
  }
}

export default Private;

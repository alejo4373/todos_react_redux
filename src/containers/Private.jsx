import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import TodosContainer from './TodosContainer';
import JournalRouter from '../routers/JournalRouter';
import ProfileContainer from './ProfileContainer';
import DashboardContainer from './DashboardContainer';

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
          <Link to='/dashboard' >Dashboard</Link>{' '}
          <Link to='/todos' >Todos</Link>{' '}
          <Link to='/journal'>Journal</Link>{' '}
          <Link to='/profile'>Profile</Link>
        </nav>
        <Switch>
          <Route path='/todos' component={TodosContainer} />
          <Route path='/journal' component={JournalRouter} />
          <Route path='/dashboard' component={DashboardContainer} />
          <Route path='/profile' component={ProfileContainer} />
        </Switch>
      </div>
    )
  }
}

export default Private;

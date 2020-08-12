import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import JournalPage from '../components/JournalPage';

const JournalRouter = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:date`} component={JournalPage} />
      {/* TODO <Route path={`${match.path}/calendar`} /> */}
      {/* TODO <Route path={`${match.path}/search`} /> */}
      <Redirect to={`${match.path}/today`} />
    </Switch>
  )
}

export default JournalRouter;

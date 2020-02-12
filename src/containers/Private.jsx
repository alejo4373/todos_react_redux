import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TodosContainer from './TodosContainer';
import JournalContainer from './JournalContainer';

const Private = () => {
  return (
    <div>
      <nav>
        <Link to='/todos' >Todos</Link>{' '}
        <Link to='/journal'>Journal</Link>
      </nav>
      <Switch>
        <Route path='/todos' component={TodosContainer} />
        <Route path='/journal' component={JournalContainer} />
      </Switch>
    </div>
  )
}

export default Private;

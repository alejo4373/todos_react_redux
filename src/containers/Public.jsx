import React from 'react';
import AuthContainer from './AuthContainer'
import Landing from '../components/Landing'
import { Link, Route, Switch } from 'react-router-dom'

const Public = () => {

  return (
    <>
      <nav>
        <Link to='/login' >Login</Link>{' '}
        <Link to='/signup'>Signup</Link>
      </nav>
      <Switch>
        <Route path='/(login|signup)' component={AuthContainer} />
        <Route path='/' component={Landing} />
      </Switch>
    </>
  )
}

export default Public;

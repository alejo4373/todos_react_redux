import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import React from 'react';

const PrivateRoute = (props) => {
  const { component: Component, user, ...rest } = props
  return (
    <Route {...rest} render={() => {
      if (user) {
        return <Component />
      }
      return <Redirect to={{
        pathname: '/login',
        state: { referrer: props.location.pathname }
      }} />
    }} />
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);

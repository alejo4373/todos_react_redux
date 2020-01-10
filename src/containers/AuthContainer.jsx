import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { REQUEST_AUTH_LOGIN } from '../store/actionTypes'
import LoginForm from '../components/Auth/LoginForm';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { auth, history, location } = this.props
    if (auth.user !== prevProps.auth.user) {
      const { referrer } = location.state || { referrer: "/todos" }
      if (auth.user) {
        history.replace(referrer)
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting form')
    this.props.loginUser(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  renderLoginForm = (routeProps) => {
    const { username, password } = this.state;
    return (
      <LoginForm
        username={username}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...routeProps}
      />
    )
  }

  render() {
    const { location } = this.props
    return (
      <>
        {location.state && location.state.referrer
          ? <p> You need to log in to go there </p>
          : null
        }
        <Switch>
          <Route path="/login" render={this.renderLoginForm} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (credentials) => dispatch({
      type: REQUEST_AUTH_LOGIN,
      payload: { credentials: credentials }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

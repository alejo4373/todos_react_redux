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
    return (
      <Switch>
        <Route path="/login" render={this.renderLoginForm} />
      </Switch>
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

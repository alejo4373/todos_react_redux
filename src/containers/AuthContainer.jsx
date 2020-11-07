import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { REQUEST_AUTH_LOGIN, REQUEST_AUTH_SIGNUP } from '../store/actionTypes/auth'
import LoginForm from '../components/Auth/LoginForm';
import SignupForm from '../components/Auth/SignupForm';
import ReCAPTCHA from 'react-google-recaptcha';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      humanVerified: false,
      recaptchaToken: '',
      message: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.humanVerified) {

      const formName = e.target.name
      if (formName === "signup") {
        this.props.signupUser(this.state)
      } else {
        this.props.loginUser(this.state)
      }
    } else {
      this.setState({
        message: 'Please verify that you are not a robot and try again.'
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleCaptcha = (token) => {
    if (token) {
      console.log('captcha token:', token)
      this.setState({
        message: 'You can now log',
        humanVerified: true,
        recaptchaToken: token
      })
    } else {
      this.setState({
        humanVerified: false,
        recaptchaToken: '',
        message: 'Human verification expired, please indicate you are not a robot again'
      })
    }
  }

  handleCaptchaError = (err) => {
    this.setState({
      humanVerified: false,
      recaptchaToken: '',
      message: 'There was an error. Please check your network and try again later'
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

  renderSignupForm = (routeProps) => {
    const { username, password, email } = this.state;
    return (
      <SignupForm
        username={username}
        password={password}
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...routeProps}
      />
    )
  }

  render() {
    const { history, location, auth } = this.props
    const { referrer } = location.state || { referrer: "/profile" }
    if (auth.loggedIn) {
      history.replace(referrer)
    }

    return (
      <>
        {location.state && location.state.referrer
          ? <p> You need to log in to go there </p>
          : null
        }
        <Switch>
          <Route path="/login" render={this.renderLoginForm} />
          <Route path="/signup" render={this.renderSignupForm} />
        </Switch>
        <p>{this.state.message}</p>
        <ReCAPTCHA
          sitekey="6LdI4d0ZAAAAAOy7aZaRNZy1WJWJpD5tXTH8Y30l"
          onChange={this.handleCaptcha}
          onErrored={this.handleCaptchaError}
        />
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
    }),
    signupUser: (userInfo) => dispatch({
      type: REQUEST_AUTH_SIGNUP,
      payload: { userInfo }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

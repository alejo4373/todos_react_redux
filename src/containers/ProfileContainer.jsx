import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUEST_USER } from '../store/actionTypes/profile';
import { REQUEST_AUTH_LOGOUT } from '../store/actionTypes/auth';
import UserCard from '../components/Profile/UserCard';
import '../styles/Profile.css';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  logoutUser = () => {
    this.props.logoutUser();
    this.props.history.replace('/')
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading...</div>
    return (
      <div className="profile">
        <UserCard user={user} />
        <button onClick={this.logoutUser}>Log-Out</button>
      </div>
    )
  }
}

const mapStateToProps = ({ profile }) => profile
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch({ type: REQUEST_USER }),
    logoutUser: () => dispatch({ type: REQUEST_AUTH_LOGOUT })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

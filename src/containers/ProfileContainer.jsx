import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUEST_USER } from '../store/actionTypes';
import UserCard from '../components/Profile/UserCard';
import '../styles/Profile.css';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading...</div>
    return (
      <div className="profile">
        <UserCard user={user} />
      </div>
    )
  }
}

const mapStateToProps = ({ profile }) => profile
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch({ type: REQUEST_USER })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

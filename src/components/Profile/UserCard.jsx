import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src="/user-icon.png" alt={`${user.username} avatar`} />
      <h3>{user.username}</h3>
      <h4>{user.points} points</h4>
    </div>
  )
}
export default UserCard;

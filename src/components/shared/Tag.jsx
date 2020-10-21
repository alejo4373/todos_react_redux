import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = ({ name, handleRemoveTag }) => {
  const handleClick = () => {
    handleRemoveTag(name)
  }

  return (
    <li className="tag">
      <Link to={`/todos?tags[]=${name}`}>{name}</Link>
      <button onClick={handleClick}>X</button>
    </li>
  )
}

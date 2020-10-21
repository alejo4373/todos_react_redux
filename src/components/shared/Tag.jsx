import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = ({ name, handleRemoveTag }) => {
  const handleClick = () => {
    handleRemoveTag(name)
  }

  return (
    <li className="tag">
      <Link className="tag__label" to={`/todos?tags[]=${name}`}>{name}</Link>
      <button className="tag__remove-btn" onClick={handleClick}>×</button>
    </li>
  )
}

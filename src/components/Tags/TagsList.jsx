import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TagsList = ({ type }) => {
  // Restraining of using redux until needed
  const [tags, setStags] = useState([])

  const getTags = async (type) => {
    try {
      let { data } = await axios.get('/api/tags', { params: { type } })
      setStags(data.payload)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTags(type)
  }, [type])

  return (
    <div>
      <h1>Todo Tags</h1>
      <ul>{
        tags.map(tag => <li key={tag.id}><Link to={`/todos?tags[]=${tag.name}`}>{tag.name}</Link></li>)
      }</ul>
    </div>
  )
}

export default TagsList

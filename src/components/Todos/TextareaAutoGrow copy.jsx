import React, { useState, useEffect, useRef } from 'react'
import "../../styles/TextareaAutoGrow.css"

const TextareaAutoGrow = ({ onChange, onSave, value }) => {
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  const [editing, setEditing] = useState(false)

  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);

  const inputRef = useRef(null)

  const handleValue = (e) => {
    const calculatedHeight = height + paddingTop + paddingBottom
    const { scrollHeight } = e.target
    if (scrollHeight > calculatedHeight) {
      setHeight(scrollHeight - (paddingTop + paddingTop))
    } else {
      setHeight(height)
    }
    onChange(e.target.value)
  }

  const handleEditClick = (e) => {
    setEditing(true)
    setHeight(e.target.clientHeight)
    setWidth(e.target.clientWidth)
  }

  const handleBlur = (e) => {
    setEditing(false)
    onSave()
  }

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  useEffect(() => {
    if (inputRef.current) {
      let computedStyles = window.getComputedStyle(inputRef.current)
      setPaddingTop(parseInt(computedStyles.paddingTop))
      setPaddingBottom(parseInt(computedStyles.paddingBottom))
    }
  }, [inputRef.current])

  let styles = {
    height: height + "px",
    width: width + "px"
  }

  console.log('actual =>', height)
  return (
    <>
      <textarea
        value={value}
        className="textarea-auto-grow"
        ref={inputRef}
        onChange={handleValue}
        onBlur={handleBlur}
        style={styles}
      ></textarea >
      <p
        tabIndex="0"
        className="todo-text"
        onClick={handleEditClick}
        onFocus={handleEditClick}
      >
        {value}
      </p>
    </>
  )
}

export default TextareaAutoGrow

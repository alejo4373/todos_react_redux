import React, { useState, useEffect, useRef } from 'react'
import "../../styles/TextareaAutoGrow.css"

const TextareaAutoGrow = ({ onChange, value, ...rest }) => {
  const [height, setHeight] = useState(0)

  const inputRef = useRef(null)

  // eslint-disable-next-line
  useEffect(() => {
    const { scrollHeight } = inputRef.current
    const { paddingTop, paddingBottom } = window.getComputedStyle(inputRef.current)
    const verticalPadding = parseInt(paddingTop) + parseInt(paddingBottom)
    const calculatedHeight = height + verticalPadding
    if (scrollHeight > calculatedHeight) {
      setHeight(scrollHeight)
    }
  })

  // Focus input on mount
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  let styles = {
    height: height + "px"
  }

  if (!value) {
    delete styles.height // Reset height when input is empty
  }

  return (
    <textarea
      value={value}
      className="textarea-auto-grow"
      ref={inputRef}
      onChange={onChange}
      style={styles}
      {...rest}
    ></textarea >
  )
}

export default TextareaAutoGrow

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

  let styles = {
    height: height + "px",
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

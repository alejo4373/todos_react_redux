import React, { useState } from 'react'

const withPreviewClickToEdit = (WrappedInput) => {
  return (props) => {
    const [isEditting, setIsEditting] = useState(false)

    const startEditting = () => {
      setIsEditting(true)
    }

    const stopEdditing = () => {
      setIsEditting(false)
    }

    return (
      <>{
        isEditting
          ? <WrappedInput {...props} onBlur={stopEdditing} />
          : <p
            onClick={startEditting}
            onFocus={startEditting}
            role="button"
            tabIndex="0">{props.value}
          </p>
      }</>
    )
  }
}

export default withPreviewClickToEdit;

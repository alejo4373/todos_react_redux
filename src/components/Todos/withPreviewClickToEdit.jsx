import React, { useState } from 'react'

const withPreviewClickToEdit = (WrappedInput) => {
  return (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const startEditing = () => {
      setIsEditing(true)
    }

    const stopEdditing = () => {
      setIsEditing(false)
    }

    const handleOnBlur = () => {
      stopEdditing()
      if (props.onBlur) {
        props.onBlur()
      }
    }

    return (
      <>{
        isEditing
          ? <WrappedInput {...props} onBlur={handleOnBlur} />
          : <p
            onClick={startEditing}
            onFocus={startEditing}
            role="button"
            tabIndex="0">{props.value}
          </p>
      }</>
    )
  }
}

export default withPreviewClickToEdit;

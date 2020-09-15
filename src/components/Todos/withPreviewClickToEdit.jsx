import React, { useState } from 'react'

const withPreviewClickToEdit = (WrappedInput) => {
  return (props) => {
    const [isEditing, setIsediting] = useState(false)

    const startediting = () => {
      setIsediting(true)
    }

    const stopEdditing = () => {
      setIsediting(false)
    }

    return (
      <>{
        isEditing
          ? <WrappedInput {...props} onBlur={stopEdditing} />
          : <p
            onClick={startediting}
            onFocus={startediting}
            role="button"
            tabIndex="0">{props.value}
          </p>
      }</>
    )
  }
}

export default withPreviewClickToEdit;

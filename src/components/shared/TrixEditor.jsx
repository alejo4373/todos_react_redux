import React from 'react'
import {
  ReactTrixRTEInput as TrixEditor,
  ReactTrixRTEToolbar as TrixToolbar
} from 'react-trix-rte'
import 'trix'
import "../../styles/TrixEditor.css"

const Editor = ({ value, onChange, placeholder, id }) => {
  let options = ["heading1", "bold", "italic", "link", "bullet", "number", "undo", "redo"]

  const handleChange = (e, value) => {
    onChange(value)
  }
  return (
    <div className="editor" >
      <TrixToolbar
        toolbarId={`trix-toolbar${id ? '-' + id : ''}`}
        toolbarActions={options}
        disableGroupingAction={true}
      />
      <TrixEditor
        defaultValue={value}
        placeholder={placeholder}
        onChange={handleChange}
        toolbarId={`trix-toolbar${id ? '-' + id : ''}`}
      />
    </div>
  )
}
export default Editor

import React, { useRef, useEffect } from 'react'
import {
  ReactTrixRTEInput as TrixEditor,
  ReactTrixRTEToolbar as TrixToolbar
} from 'react-trix-rte'
import 'trix'
import "../../styles/TrixEditor.css"

const Editor = ({ value, onChange, placeholder, id }) => {
  let options = ["heading1", "bold", "italic", "link", "bullet", "number", "undo", "redo"]
  let editorRef = useRef(null)

  const handleChange = (e, value) => {
    onChange(value)
  }

  useEffect(() => {
    const { editor } = editorRef.current
    if (value.length < 1 && editor.getDocument().toString().length > 1) {
      editor.loadJSON({ document: [] })
    }
  }, [value])

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
        trixInputRef={editorRef}
        toolbarId={`trix-toolbar${id ? '-' + id : ''}`}
        trixEditorOptions={{ className: "trix-editor-small" }}
      />
    </div>
  )
}
export default Editor

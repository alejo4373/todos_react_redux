import React, { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const Editor = ({ value, onChange, theme, readOnly, placeholder }) => {
  const config = {
    modules: {
      keyboard: {
        bindings: { tab: false }
      },
      toolbar: [{ 'header': [1, 2, 3, false] }, 'bold', 'italic', 'underline', 'link']
    },
    theme: theme || 'snow',
    readOnly,
    placeholder
  }
  const { quill, quillRef } = useQuill(config)

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value)
      quill.on('text-change', () => {
        onChange(quill.root.innerHTML)
      })
    }
    // `value` will change too often I don't want to the effect to rerun
    // `onChange` will always be available
    // Ignoring `value` and `onChange` dependencies 
    // eslint-disable-next-line
  }, [quill])

  useEffect(() => {
    if (quill && value.length < 1) {
      quill.clipboard.dangerouslyPasteHTML(value)
    }
  }, [quill, value])

  return (
    <div className="editor" >
      <div ref={quillRef}></div>
    </div>
  )
}
export default Editor

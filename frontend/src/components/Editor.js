import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'

const Editor = () => {
  const [code, setCode] = useState('Hello World')

  return (
    <>
      <CodeMirror
        className="editor"
        height="96vh"
        value={'Hello Developer!!!'}
        extensions={[cpp()]}
        onChange={(value, viewUpdate) => {
          setCode(value)
        }}
        theme="dark"
        basicSetup={true}
        indentWithTab={true}
        editable={true}
      />
    </>
  )
}

export default Editor

import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { oneDarkTheme } from '@codemirror/theme-one-dark'

const Editor = () => {
  const [code, setCode] = useState('Hello World')

  return (
    <>
      <CodeMirror
        value={'Hello Developer!!!'}
        height="600px"
        extensions={[cpp()]}
        onChange={(value, viewUpdate) => {
          setCode(value)
        }}
        theme="light"
        basicSetup={true}
        indentWithTab={true}
      />
    </>
  )
}

export default Editor
